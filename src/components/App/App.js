import React, { Component } from 'react';
import Header from "../Header/Header";
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
      isLoggedIn: false,
      user: null
    }

    this.Auth = new AuthServices();
    this.Auth.login = this.login.bind(this);
  }

  login(username, password){
    return this.Auth._login(username,password)
      .then((res)=>{
        if( !res.success) Promise.reject( res );

        this.setState({
          isLoggedIn: true
          user: res.user
        })
    }).catch((err)=> Promise.reject(err))
  }

  logout(){
    this.Auth.logout();
    this.setState({
      user: null,
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route
              exact
              path="/login"
              render={ (props)=> <LoginContainer history={props.history} auth={ this.Auth }/> } />
            <Route exact path="/profile" component={ ProfileContainer } />
            <Route exact path="/check" render={ ()=> <div>This is a tester page</div> } />
            <Route path="/*" render={()=> <Redirect to="/" /> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
