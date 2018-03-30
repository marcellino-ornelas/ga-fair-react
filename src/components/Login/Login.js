import React, { Component } from 'react';
import { Row, Input, Button} from "react-materialize";
import './Login.css';
import {} from "react-materialize"




import AuthServices from "../../components/AuthServices/AuthServices";

const path = require("path");

class Login extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthServices();
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

  makeAction(endPoint){
    return path.join("http://localhost:3001/", endPoint);
  }

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
    return (
      <div>
        <h2 className="center-align"> Log In </h2>
        <Row>
          <Input s={12} type="text" name="username" placeholder="username" onChange={this.handleChange}></Input>
        </Row>
        <Row>
          <Input s={12} type="text" name="password" placeholder="password" onChange={this.handleChange}></Input>
        </Row>
        <Row>
          <Button type="submit" onClick={this.handleSubmit}> Submit </Button>
        </Row>
      </div>
    );
  }
};

export default Login;
