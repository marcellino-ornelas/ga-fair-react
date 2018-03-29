import React, { Component } from 'react';
import { Navbar } from "react-materialize";
import { NavLink } from "react-router-dom";
import './Nav.css';

class Nav extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Navbar brand="WAYFAIR" right>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/logout"> logOut </NavLink>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
