import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';
import Post from './Post/Post';
import axios from 'axios';
// import withAuth from "../../components/WithAuth/WithAuth"
// import './ProfileContainer.css';

class Posts extends Component {
  //new
  constructor() {
    super();
  }

  render() {
  // instead of posts instead of postsList
    const renderedPostsList = this.props.posts.map((post,index) => {
      return <Post key={index} post={post} />;
    });

    return (
      <div>
        <div className="col-md-12">
          <h1 className="page-header small">Recent Posts</h1>
          <div className="media">
            {renderedPostsList}
          </div>
        </div>
      </div>
    )
  }
};

export default Posts;
