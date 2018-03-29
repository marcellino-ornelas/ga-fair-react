import React, { Component } from 'react';
import { Navbar, Modal, NavItem, Button } from "react-materialize";
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
          <NavItem onClick={ this.activateModal } href="javascript:void(0)"> Login </NavItem>
          <NavItem onClick={ this.activateModal } href="javascript:void(0)"> SignUp </NavItem>
          <Modal
            id="login-signup"
            modalOptions={ { dismissible: this.state.dismissible } }
            header='Sign Up or Log In'
            open={this.state.openModal}
            bottomSheet
            actions={ <Button onClick={()=> this.setState({ openModal: false})}> Close </Button>}>
            <Login></Login>
          </Modal>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
