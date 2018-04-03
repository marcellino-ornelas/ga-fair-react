import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';
import ProfilePosts from './ProfilePosts';
// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class Main extends Component {
  render() {
    return (
      <div>
        <ProfilePosts />
      </div>
    )
  }
};

export default Main;
