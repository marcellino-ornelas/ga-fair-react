import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "../../containers/Home/HomeContainer"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route exact path="/check" render={ ()=> <div>This is a tester page</div> } />
            <Route path="/*" render={()=> <Redirect to="/" /> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
