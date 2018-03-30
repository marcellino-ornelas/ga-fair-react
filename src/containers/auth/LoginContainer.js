import React, { Component } from 'react';
import './LoginContainer.css';

import Login from "../../components/Login/Login";
import { Row, Col } from "react-materialize";

class LoginContainer extends Component {
  // constructor(props){
    // super();
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <Row>
        <Col s={5}><Login history={ this.props.history } auth={this.props.auth} /></Col>
        <Col s={1} className="line"></Col>
        {/*<Col s={5}> <Login name="Login" action="/login" /></Col>*/}
      </Row>
    );
  }
}

export default LoginContainer;
