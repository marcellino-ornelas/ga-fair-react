
import decode from 'jwt-decode';
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:3001' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this._login = this._login.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
        this._getProfile = this._getProfile.bind(this)
        this._checkStatus = this._checkStatus.bind(this)
    }

    _login(username, password) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/login`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            if( !res.token ) return Promise.reject( { err: res } )
            else {
                this.setToken(res.token) // Setting the token in localStorage
                return Promise.resolve(res);
            }
        })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    _logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    _signup(username, password){
        return this.fetch(`${this.domain}/signup`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        })
    }

    _getProfile() {
        // Using jwt-decode npm package to decode the token
        let id = decode(this.getToken()).user_id;
        console.log("fetching user info")

        return this.fetch(`${this.domain}/users/${id}`)
                .then(function(res){
                    console.log("user fetched")
                    console.log("has user info? " + !!res.user._id)
                    if( !res.user ) return Promise.reject(res)
                    else return res
                })

    }


    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(this._handleAuth)
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response.json()
        } else {
            return Promise.reject({success:false, message:"interal server error"});
        }
    }

    _handleAuth(res){
        // response must send a success field to let us know we can proceed
        if( !res.success ) return Promise.reject(res)

        return res

    }
}
