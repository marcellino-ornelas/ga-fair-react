import React, { Component } from 'react';
import './City.css';

class City extends Component {
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
    <div>
      <li className="list-group-item">
        London
      </li>
      <li className="list-group-item">
        Sydney
      </li>
      <li className="list-group-item">
        San Francisco
      </li>
      <li className="list-group-item">
        Seattle
      </li>
    </div>
    );
  }
}

export default City;
