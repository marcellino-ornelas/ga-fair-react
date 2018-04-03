import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import { Route, Switch, Redirect } from "react-router-dom";
import makeCancelable from "cancel-that-promise"

import HomeContainer from "../../containers/Home/HomeContainer"
import LoginContainer from "../../containers/auth/LoginContainer"
import ProfileContainer from "../../containers/Profile/ProfileContainer"
import CitiesContainer from "../../containers/Cities/CitiesContainer"

import AuthServices from "../AuthServices/AuthServices";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthServices();

    this.state = {
      isLoggedIn: this.Auth.loggedIn() ,
      user: {}
    }

    this.setUser = this.setUser.bind(this);

    this.Auth.login = this.login.bind(this);
    this.Auth.signup = this.signup.bind(this);
    this.Auth.logout = this.logout.bind(this);
    // this.Auth.getProfile = this.getProfile.bind(this);
  }

  componentDidMount(){

    if(this.state.isLoggedIn && !this.state.user._id ){
      // this.Auth._getProfile().
      //   then(this.setUser)
      //   .catch(() =>{
      //     this.logout()
      //   })
        this.cancelFetch = makeCancelable(
          this.Auth._getProfile(),
          this.setUser,
          this.logout
        );
    }
  }

  componentWillUnmount() {
    this.cancelFetch && this.cancelFetch();
  }

  setUser(res){
    console.log(res)
    console.log("setting user ")
    return new Promise((resolve,reject) => {
      try{
        this.setState({
          isLoggedIn: true,
          user: res.user
        }, resolve)
        console.log(this.state)
      } catch (e){
        reject(e);
      }
    })
  }

  login(username, password){
    return this.Auth._login(username,password)
      .then(this.setUser)
  }

  signup(username, password){
    return this.Auth._signup(username,password)
      .then(this.setUser)
      // .catch((err)=> Promise.reject(err))
  }

  logout(e){
    e && e.preventDefault();
    this.Auth._logout();
    this.setState({
      user: null,
      isLoggedIn: false
    })
  }

  render() {
    console.log("rendering home")
    return (
      <div className="App">
        <Nav isLoggedIn={ this.state.isLoggedIn } logout={ this.Auth.logout } />
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route exact path="/login" render={ (props)=>{
              return <LoginContainer history={props.history} auth={ this.Auth }/>
            }}/>
            <Route exact path="/cities" component={ CitiesContainer } />
            <Route exact path="/about" render={ ()=> <div>This is a about page</div> } />
            <Route path="/profile" render={ (props) => {
              return this.state.isLoggedIn ?
                      <ProfileContainer {...props} user={this.state.user} auth={this.Auth}/> : <Redirect to="/login"/>
            }} />
            <Route path="/*" render={()=> <Redirect to="/" /> } />
          </Switch>
        </main>
      </div>
    );
  }
}


export default App;
