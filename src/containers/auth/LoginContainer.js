import React, { Component } from 'react';
import './LoginContainer.css';

import Login from "../../components/Login/Login";
import { Row, Col, Grid } from "react-bootstrap";

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
          /*<Col s={5}> <Login name="Login" action="/login" /></Col>*/
    return (
      <Grid>
        <Row>
          <Col sm={12} md={5}  >
            <Login history={ this.props.history } auth={this.props.auth} />
          </Col>
          <Col sm={0} md={1}></Col>
          <Col sm={12} md={5}></Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginContainer;
