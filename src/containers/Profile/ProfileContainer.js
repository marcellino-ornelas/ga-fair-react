import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';
import Post from '../../components/Post/Post';
import ProfileHeader from './ProfileHeader';
import Main from './Main';

// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <Main />

      </div>
    )
  }
};

export default ProfileContainer
