import React, { Component } from 'react';
import './City.css';

class City extends Component {
  constructor(props){
    super();
    this.state = {};

    // this.handleClick = this.handleClick.bind(this)
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  // handleClick(e){
  //   let id = this.props.location._id

  //   this.props.changeLocation(id);
  // }

  render() {
    let location = this.props.location;
    return (
      <li className="list-group-item" data-id={location._id} onClick={this.props.changeLocation}>
        {location.country}
      </li>
    );
  }
}

export default City;
