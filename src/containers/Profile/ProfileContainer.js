import React, { Component } from 'react';
import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfileContainer extends Component {

  render() {
    return (
      <div> This is My profile Container </div>
    );
  }
}

export default withAuth(ProfileContainer);