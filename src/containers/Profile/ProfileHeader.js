import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';

// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfileHeader extends Component {
  render() {
    return (
      <header className="vertical-center">
        <div>
          <h1>User Profile</h1>
        </div>
      </header>
    )
  }
};

export default ProfileHeader;
