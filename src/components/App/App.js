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
    this.state = { isLoggedIn: false }
    this.Auth = new AuthServices();
  }

  login(){
    this.login()
    this.setState({ isLoggedIn: true })
  }



  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route exact path="/login" component={ LoginContainer } />
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
