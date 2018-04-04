import React, { Component } from 'react';
import './City.css';

class City extends Component {

  render() {
    let location = this.props.location;
    return (
      <li className="list-group-item" data-id={location._id} onClick={this.props.changeLocation}>
        {location.city}
      </li>
    );
  }
}

export default City;
