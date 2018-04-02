import React, { Component } from 'react';
import { Row, Button, Grid, FormGroup, FormControl, ControlLabel, Form} from "react-bootstrap";
import { Input, Col } from "react-materialize";
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
     if(this.Auth.loggedIn()) this.props.history.replace('/');
  }
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    this.Auth.login(this.state.username,this.state.password)
      .then(res =>{
         this.props.history.replace('/');
      })
      .catch(err =>{
          console.log(err);
      })
  }

  render() {
      /*<Grid>
        <h2 className="center-align"> Log In </h2>
        <Row className="show-grid">
        <Col xs={12}>
          <Input s={12} type="text" name="username" placeholder="username" onChange={this.handleChange}></Input>
        </Col>
        </Row>
        <Row className="show-grid">
        <Col xs={12}>
          <Input s={12} type="text" name="password" placeholder="password" onChange={this.handleChange}></Input>
        </Col>
        </Row>
        <Row className="show-grid">
        <Col xs={12}>
          <Button type="submit" onClick={this.handleSubmit}> Submit </Button>
        </Col>
        </Row>
      </Grid>*/
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            <ControlLabel> Username</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="username" placeholder="username" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            <ControlLabel> Password </ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
};

export default Login;
