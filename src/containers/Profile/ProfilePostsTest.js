import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';

// import withAuth from "../../components/WithAuth/WithAuth"
import './ProfileContainer.css';

class ProfilePosts extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <h1 className="page-header small">Recent Posts</h1>
          <div className="media">
            <div className="media-left"> <a href="javascript:void(0)"> <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt className="media-object" /> </a> </div>
            <div className="media-body">
              <h4 className="media-heading">London<br />
                <small><i className="fa fa-clock-o" /> Today, 2:00 am</small> </h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio. </p>
              <ul className="nav nav-pills pull-left ">
                <li><a href title><i className="glyphicon glyphicon-thumbs-up" /> 3</a></li>
                <li><a href title><i className=" glyphicon glyphicon-comment" /> 5</a></li>
                <li><a href title><i className="glyphicon glyphicon-share-alt" /> 1</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12 commentsblock border-top">
          <div className="media">
            <div className="media-left"> <a href="javascript:void(0)"> <img alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar1.png" className="media-object" /> </a> </div>
            <div className="media-body">
              <h4 className="media-heading">San Francisco<br />
                <small><i className="fa fa-clock-o" /> Yesterday, 12:30 pm</small> </h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <ul className="nav nav-pills pull-left ">
                <li><a href title><i className="glyphicon glyphicon-thumbs-up" /> 2</a></li>
                <li><a href title><i className=" glyphicon glyphicon-comment" /> 2</a></li>
                <li><a href title><i className="glyphicon glyphicon-share-alt" /> 1</a></li>
              </ul>
            </div>
          </div>
          <div className="media">
            <div className="media-left"> <a href="javascript:void(0)"> <img alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar1.png" className="media-object" /> </a> </div>
            <div className="media-body">
              <h4 className="media-heading">Sydney<br />
                <small><i className="fa fa-clock-o" /> Yesterday, 1:10 pm</small> </h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>
              <ul className="nav nav-pills pull-left ">
                <li><a href title><i className="glyphicon glyphicon-thumbs-up" /> 5</a></li>
                <li><a href title><i className=" glyphicon glyphicon-comment" /> 2</a></li>
                <li><a href title><i className="glyphicon glyphicon-share-alt" /> 6</a></li>
              </ul>
            </div>
          </div>
          <div className="media">
            <div className="media-left"> <a href="javascript:void(0)"> <img alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar1.png" className="media-object" /> </a> </div>
            <div className="media-body">
              <h4 className="media-heading">San Francisco<br />
                <small><i className="fa fa-clock-o" /> Monday, 6:30 am</small> </h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <ul className="nav nav-pills pull-left ">
                <li><a href title><i className="glyphicon glyphicon-thumbs-up" /> 8</a></li>
                <li><a href title><i className=" glyphicon glyphicon-comment" /> 1</a></li>
                <li><a href title><i className="glyphicon glyphicon-share-alt" /> 11</a></li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    )
  }
};

export default ProfilePosts;
