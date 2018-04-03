import React, { Component } from 'react';
import './CitiesContainer.css';
import axios from "axios";
import makeCancelable from "cancel-that-promise"
import { FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';

import Cities from '../../components/Cities/Cities'
import Post from '../../components/Post/Post'

class CitiesContainer extends Component {
  constructor(props){
    super();
    this.state = {
      locationId: false,
      locations: []
    };

    this.changeLocation = this.changeLocation.bind(this);
  }

  // componentWillMount(){}
  componentDidMount(){
    this.cancelFetch = makeCancelable(
      axios.get("https://radiant-ravine-90267.herokuapp.com/location"),
      (res) => {console.log(res);this.setState({ locations: res.data.locations })},

      (error) => console.log(error)
    );
  }
  componentWillUnmount(){
    this.cancelFetch();
  }

  changeLocation(e){
    // get id from li
    let id = (e.target.dataset || {}).id || e.target.attributes["data-id"]
    console.log(id)
    this.setState({ locationId: id })
  }

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
          <div className="section">
            <Grid fluid={true}>
              <Row className="search float-right">
                <Col xs={9} md={8}>
                  <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                  </FormGroup>
                </Col>
                <Col xs={3} md={4}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Grid>
          </div>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={3} >
              <h3> Cities </h3>
              <Cities locations={ this.state.locations } changeLocation={ this.changeLocation }/>
            </Col>
            <Col xs={12} md={9} >
              {
                this.state.locationId ?
                  <Post locationId={this.state.locationId}/> :
                  <h3> Please select a location to use </h3>
              }
            </Col>
          </Row>
          </Grid>
      </div>


    );
  }
}

export default CitiesContainer;
