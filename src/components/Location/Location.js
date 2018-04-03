import React, { Component } from 'react';
import './Location.css';
import makeCancelable from "cancel-that-promise"
import axios from 'axios';
import { Grid, Row, Col, ListGroup, ListGroupItem, Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import Posts from "../Posts/Posts"


class Location extends Component {

  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state ={
      show: false,
      posts:[]
    };
  }

  componentDidMount(){
    console.log("yess we in the post.......");
    this.cancelFetch = makeCancelable(
      axios.get("https://radiant-ravine-90267.herokuapp.com/post"),
      (res) => { this.setState({ posts: res.data.posts }); },
      (err) => {console.log(err); }
    );

    this.state = {
      owner: (this.props.user || {})._id
    }
  }
  // componentDidMount(){}
  componentWillUnmount(){
    this.cancelFetch();
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose(){
    this.setState({ show: false });
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
    if( !this.state.owner ) return alert("need to be logged in to send")

    axios.post("https://radiant-ravine-90267.herokuapp.com/post",{
      owner: this.state.owner._id,
      postDescription: this.state.postDescription,
      location: this.state.location,
      image: "somebullshit",
      title: this.state.title
    })
    .then((res)=>{
      this.setState({
        show: false,
        posts: this.state.posts.concat(res.data.post)
      })
    })
    // this.set
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const locationOptions = this.props.locations.map((location, index)=>{
      return <option key={index} value={location._id}> {location.city} </option>
    });
    return (

    <div>
      <Grid fluid={true}>
        <Row className="box-container">
          <Col xs={12} md={10}>
            <h1>{this.props.locationId}</h1>
              <img src="/images/london.jpeg" alt="P"/>


            <button className="icon" onClick={this.handleShow}>
              <span className="glyphicon glyphicon-plus"></span>
            </button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create Post</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" name="title" placeholder="title" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Cities</ControlLabel>
                  <FormControl componentClass="select" placeholder="location" name="location" onChange={this.handleChange}>
                    { locationOptions }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Text</ControlLabel>
                    <FormControl componentClass="textarea" name="postDescription" placeholder="textarea" onChange={this.handleChange}/>
                </FormGroup>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Posts posts={this.state.posts} />
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Location;



            // <div className="posts">
            //   <h2>Posts</h2>
            //     <ListGroup>
            //       <div className="fx">
            //         <img src="/images/face1.jpeg" className="post-img" alt="p" />
            //         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            //         </div>
            //     </ListGroup>
            //   </div>
