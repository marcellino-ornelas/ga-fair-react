import React, { Component } from 'react';
import { Navbar } from "react-materialize";
import { NavItem } from "react-materialize";
import './Nav.css';

class Nav extends Component {

  render() {
    return (
      <div>
        <Navbar brand="WAYFAIR" right>
          <NavItem href="#">Bye</NavItem>
          <NavItem href="#">Hey</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
