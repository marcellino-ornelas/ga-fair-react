import React, { Component } from 'react';
import './LoginContainer.css';

import Login from "../../components/Login/Login";
import { Row, Col, Grid } from "react-bootstrap";

class LoginContainer extends Component {

  render() {
    return (
      <Grid bsClass="section">
        <Row>
          <Col sm={12} md={5} lg={5}>
            <Login history={ this.props.history } auth={this.props.auth} submitAction="login" name="Login" />
          </Col>
          <Col xsHidden smHidden md={1}> <div className="line"></div> </Col>
          <Col sm={12} md={5} lg={5}>
            <Login history={this.props.history} auth={this.props.auth} submitAction="signup" name="Sign Up" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginContainer;
