import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './NavItem.css';

class NavItem extends Component {
  render() {
    return (
      <li role="presentation"> <NavLink to={this.props.to}> {this.props.name} </NavLink></li>
    );
  }
}

export default NavItem;
