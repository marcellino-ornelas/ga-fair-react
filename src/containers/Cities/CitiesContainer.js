import React, { Component } from 'react';
import './CitiesContainer.css';
import { Navbar,FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';

import Cities from '../../components/Cities/Cities'
import Post from '../../components/Post/Post'

class CitiesContainer extends Component {
  constructor(props){
    super();
    this.state = {
      pageId: false
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar>
          <h1>Wayfarer</h1>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={3} >
              <h3>{'Cities'}</h3>
              <Button bsStyle="info">Info</Button>
              <Cities />
            </Col>
            <Col xs={12} md={9} >
              <Post/>
            </Col>
          </Row>
          </Grid>
        </div>


    );
  }
}

export default CitiesContainer;
