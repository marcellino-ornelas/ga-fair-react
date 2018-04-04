import React, { Component } from 'react';
import './Cities.css';

import City from "./City/City";
import { ListGroup } from "react-bootstrap";
class Cities extends Component {


  render() {

    const allCities = this.props.locations.map( (location, index)=> <City key={index} location={location} changeLocation={this.props.changeLocation}/>);
    return (
      <div>
        <ListGroup componentClass="ul">
            {allCities}
        </ListGroup>
      </div>
    );
  }
}

export default Cities;
