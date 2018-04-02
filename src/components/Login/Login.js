import React, { Component } from 'react';
import { Row, Button, Grid, FormGroup, FormControl, ControlLabel, Form, Col} from "react-bootstrap";
import './Login.css';

// import AuthServices from "../../components/AuthServices/AuthServices";

const path = require("path");

class Login extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.Auth = this.props.auth
  }

  componentWillMount(){
    // stop logged in users from loging in again
     if(this.Auth.loggedIn()) this.props.history.replace('/');
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    this.Auth[this.props.submitAction](this.state.username,this.state.password)
      .then(res =>{
         this.props.history.replace('/');
      })
      .catch(err =>{
          console.log(err.message);
      })
  }

  render() {
    return (
        <Form horizontal onSubmit={ this.handleSubmit }>
         <h2> {this.props.name} </h2>
          <FormGroup>
            <Col sm={2} md={3}>
              <ControlLabel> Username</ControlLabel>
            </Col>
            <Col sm={10} md={9}>
              <FormControl type="username" name="username" placeholder="username" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} md={3}>
              <ControlLabel> Password </ControlLabel>
            </Col>
            <Col sm={10} md={9}>
              <FormControl type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs={12}>
              <div className="right">
                <Button type="submit" bsStyle="primary"> {this.props.name} </Button>
              </div>
            </Col>
          </FormGroup>
        </Form>
    );
  }
};

export default Login;
