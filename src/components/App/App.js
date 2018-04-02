import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "../../containers/Home/HomeContainer"
import LoginContainer from "../../containers/auth/LoginContainer"
import ProfileContainer from "../../containers/Profile/ProfileContainer"

import AuthServices from "../AuthServices/AuthServices";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false ,
      user: null
    }

    this.Auth = new AuthServices();
    this.Auth.login = this.login.bind(this);
    this.Auth.logout = this.logout.bind(this);
  }

  componentWillMount() {
      if (this.Auth.loggedIn()) {
        console.log("how many time will it mount");
         console.log(this.Auth.getProfile());
        this.setState({
          isLoggedIn: true
        })
      } else {
        // clear local storage
        this.Auth._logout();
      }
      // else {
      //   try {
      //     const profile = Auth.getProfile()
      //     this.setState({
      //         user: profile
      //     })
      //   }
      //   catch(err){
      //     Auth.logout()
      //     this.props.history.replace('/login')
      //   }
      // }
    }

  login(username, password){
    return this.Auth._login(username,password)
      .then((res)=>{
        if( !res.success) Promise.reject( res );

        this.setState({
          isLoggedIn: true,
          user: res.user
        })
    }).catch((err)=> Promise.reject(err))
  }

  logout(e){
    e.preventDefault();
    this.Auth._logout();
    this.setState({
      user: null,
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Nav isLoggedIn={ this.state.isLoggedIn } logout={ this.Auth.logout } />
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route
              exact
              path="/login"
              render={ (props)=> <LoginContainer history={props.history} auth={ this.Auth }/> } />
            {/*<Route exact path="/cities" component={ ProfileContainer } />*/}
            <Route exact path="/about" render={ ()=> <div>This is a about page</div> } />
            <Route path="/profile" render={ (props) => {
              return this.state.isLoggedIn ?
                      <ProfileContainer {...props} user={this.state.user}/> : <Redirect to="/login"/>
            }} />
            <Route path="/*" render={()=> <Redirect to="/" /> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
