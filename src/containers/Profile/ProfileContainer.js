import React, { Component } from 'react';

// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfileContainer extends Component {
  constructor(props){
    super(props)
    console.log("this should be render after home")
    this.Auth = props.auth
  }

  componentWillMount(){}

  render() {
    return (
      <div> username: {this.props.user.username}  </div>
    )
  }
};

export default ProfileContainer
