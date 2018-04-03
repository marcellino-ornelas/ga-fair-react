import React, { Component } from 'react';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';
import Post from './ProfilePost';
import axios from 'axios';
// import withAuth from "../../components/WithAuth/WithAuth"
// import './ProfileContainer.css';

class ProfilePosts extends Component {
  //new
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://radiant-ravine-90267.herokuapp.com/post`)
      .then(response => {this.setState({ posts: response.data }, function(){
        console.log(this.state.posts)
      })
        console.log(response.data)
        }
      )
      .catch(err => console.log(err))
  }

  render() {
    const postsList = [
      {
        title: `Visiting SF`,
        image: '/images/sfSkyline.jpg',
        postDescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        title: `Spring Vacation in London`,
        image: '/images/sfSkyline.jpg',
        postDescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
  ];
  // instead of posts instead of postsList
  const posts = this.state.posts
  const renderedPostsList = postsList.map(post => {
      return <Post post={post} />;
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

export default ProfilePosts;
