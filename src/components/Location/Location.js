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

    this.state = {
      show: false,
      // location: this.props.location,
      posts: this.props.posts.concat(),
      owner: (this.props.user || {})._id,
      data:{}
    };
  }

  // componentDidMount(){
  //   // console.log("yess we in the post.......");
  //   // this.cancelFetch = makeCancelable(
  //   //   axios.get(`https://radiant-ravine-90267.herokuapp.com/location/${this.props.locationId}`),
  //   //   (res) => { this.setState({ location: res.data.location, posts: res.data.location.posts || [] }); },
  //   //   (err) => {console.log(err); }
  //   // );

  // }
  // componentDidMount(){}
  // componentWillUnmount(){
  //   this.cancelFetch();
  // }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose(){
    this.setState({ show: false });
  }

  handleSubmit(e){
    e.preventDefault();

    if( !this.state.owner ) return alert("need to be logged in to send")

    let data = {
      image: "somebullshit",
      owner: this.state.owner,
      location: this.state.location,
      postDescription: this.state.postDescription,
      title: this.state.title
    }

    // axios.post("https://radiant-ravine-90267.herokuapp.com/post", data)
    axios.post("http://localhost:3001/post", data )
    .then( (res) => {
      this.setState({show: false}, () => {
        this.props.addPost(res)
      })
    })
    .catch((err)=> console.log(err))

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
            <h1>{this.props.currentLocation.city}</h1>
            <img src={this.props.currentLocation.image} alt="P"/>

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
          {
            this.props.posts ?
              <Posts posts={this.props.posts} /> :
              <h3> There are no posts at this time </h3>
          }
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Location;
