import React, { Component } from 'react';
import Header from "../Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "../../containers/Home/HomeContainer"
// import CitiesContainer from "../../containers/Cities/CitiesContainer"
import ProfileContainer from "../../containers/Profile/ProfileContainer"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
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
