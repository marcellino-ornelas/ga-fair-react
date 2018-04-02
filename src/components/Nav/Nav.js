import React, { Component } from 'react';
import { Navbar, Modal, NavItem, Button, Row, Col } from "react-materialize";
import { NavLink } from "react-router-dom";
import './Nav.css';

import Login from "../Login/Login";

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      openModal: false,
      dismissible: false
    }

    this.activateModal = this.activateModal.bind(this);
  }

  activateModal(){
    this.setState({
      openModal: true
    });
  }

  render(){
    return (
      <div>


        <Navbar brand="WAYFAIR" right>
          <NavLink to="/"> Home </NavLink>

        </Navbar>
      </div>
    );
  }
}

export default Nav;
