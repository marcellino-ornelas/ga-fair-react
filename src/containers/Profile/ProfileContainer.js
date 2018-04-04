import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';
import Post from '../../components/Post/Post';
import ProfileHeader from './ProfileHeader';
import Main from './Main';

// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfileContainer extends Component {
  constructor(props){
    super(props)
    console.log("this should be render after home")
    this.Auth = props.auth
  }

  render() {
    return (
      <div>
        <div> username: {this.props.user.username}  </div>
        <ProfileHeader />
        <Main />

      </div>
    )
  }
};

export default ProfileContainer
