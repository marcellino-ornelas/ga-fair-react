import React, { Component } from 'react';
import axios from "axios";
import makeCancelable from "cancel-that-promise"
import './Post.css';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';



class Post extends Component {
  constructor(props){
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    console.log("yess we in the post.......");
      this.cancelFetch = makeCancelable(
        axios.get("http://localhost:3001/post"),
        (res) => { this.setState({ posts: res.data.posts }); },
        (err) => {console.log(err); }
      );
  }
  // componentDidMount(){}
  componentWillUnmount(){
    this.cancelFetch();
  }

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    console.log(this.state)
    return (
    <div>
      <Grid fluid={true}>
        <Row className="box-container">
        <Col xs={12} md={10}>
          <h1>London</h1>
            <img src="/images/london.jpeg" alt="P"/>
            <i className="fas fa-plus-circle fa-7x"></i>
            <div className="posts">
              <h2>Posts</h2>
                <ListGroup>
                  <div className="fx">
                    <img src="/images/face1.jpeg" className="post-img" alt="p" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                </ListGroup>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Post;
