import React, { Component } from 'react';

// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfileContainer extends Component {
  constructor(props){
    super(props)
    this.Auth = props.auth
    this.state = {
      user: props.user
    }
  }

  componentWillMount(){
    if(!this.props.user._id){
      this.Auth._getProfile().
        then((res) =>{
          this.setState({ user: res.user })
        })
        .catch(() =>{
          this.props.history.replace("/login")
        })
    }
  }

  render() {
    return (

      <div> username: {this.state.user.username}  </div>

    )
  }
};

export default ProfileContainer
