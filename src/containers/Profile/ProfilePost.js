import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';

// import withAuth from "../../components/WithAuth/WithAuth"
// import './ProfileContainer.css';

class ProfilePost extends Component {
  render() {
    return (
      <div>

        <div className="media-left"><img src={this.props.post.image} alt={this.props.image} /></div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.title}<br />
            <small><i className="fa fa-clock-o" /> Today, 2:00 am</small> </h4>
          <p>{this.props.post.postDescription}</p>
          <ul className="nav nav-pills pull-left ">
            <li><a href title><i className="glyphicon glyphicon-thumbs-up" /> 3</a></li>
            <li><a href title><i className=" glyphicon glyphicon-comment" /> 5</a></li>
            <li><a href title><i className="glyphicon glyphicon-share-alt" /> 1</a></li>
          </ul>
        </div>
        <hr></hr>

      </div>
    )
  }
};

export default ProfilePost;
