import React, { Component } from 'react';
import './Cities.css';

import City from "./City/City";
import { ListGroup } from "react-bootstrap";
class Cities extends Component {
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
    const dummySentences = [
      'London','Sydney','San Francisco','Seattle'

    ];
    const allCities = dummySentences.map( (item,index)=> <City key={index} name={item} />);
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
