import React, { Component } from 'react';

import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';


import './ProfileContainers.css';

class ProfileContainers extends Component {
  render() {
    return (

      <div> This is My Profile Container </div>

    )
    }
  };

export default withAuth(ProfileContainer);
