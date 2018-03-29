import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import './Header.css';

class Header extends Component {
  // constructor(props){
    // super();
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <header className="App-header">
        <Nav/>
      </header>
    );
  }
}

export default Header;
