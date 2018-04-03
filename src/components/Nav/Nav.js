import React, { Component } from 'react';
import { Navbar, Nav as NavList, NavItem as BSNavItem } from "react-bootstrap";
import NavItem from "./NavItem/NavItem";
import './Nav.css';

import Login from "../Login/Login";

class Nav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let navLinks = [
      { name: "Home" , link: "/" },
      { name: "About", link: "/about" },
      { name: "Cites" , link: "/cities" },
      { name: "Profile", link: "/profile" }
    ];

    if(this.props.isLoggedIn){
      navLinks.push({ name: "Profile" , link: "/profile" });
    } else {
      navLinks.push({ name: "Log In" , link: "/login" },{ name: "Sign Up" , link: "/signup" });
    }

    navLinks = navLinks.map((item,index)=> <NavItem key={index} to={item.link} name={item.name} /> )

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <NavList pullRight>
            {navLinks}
            {
              this.props.isLoggedIn &&
              <BSNavItem href="javascript:void(0)" onClick={this.props.logout}> Log Out </BSNavItem>
            }
          </NavList>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;
