import React, { Component } from 'react';
import './CitiesContainer.css';
import axios from "axios";
import makeCancelable from "cancel-that-promise"
import { FormGroup, FormControl, Button , Row , Col, Grid,} from 'react-bootstrap';

import Cities from '../../components/Cities/Cities'
import Location from '../../components/Location/Location'

class CitiesContainer extends Component {
  constructor(props){
    super();
    this.state = {
      locationId: false,
      locations: [],
      location: {},
      posts: []
    };

    this.changeLocation = this.changeLocation.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  addPost(res){

    if( !res.data.success ){
      return console.log(res.data.message);
    }

    this.setState({
      posts: this.state.posts.concat(res.data.post)
    });
  }

  // componentWillMount(){}
  componentDidMount(){
    this.cancelFetch = makeCancelable(
      // axios.get('https://radiant-ravine-90267.herokuapp.com/location'),

      axios.get('http://localhost:3001/location'),
      (res) => { console.log(res); this.setState({ locations: res.data.locations }) },
      (error) => console.log(error)
    );
  }

  componentWillUnmount(){
    this.cancelFetch();
  }

  changeLocation(e){
    // get id from li
    let id = (e.target.dataset || {}).id || e.target.attributes["data-id"];
    // this.setState({ locationId: id })

    this.cancelFetch = makeCancelable(
      // axios.get(`https://radiant-ravine-90267.herokuapp.com/location/${id}`),
      axios.get(`http://localhost:3001/location/${id}`),
      (res) => { this.setState({ location: res.data.location, posts: res.data.location.posts }) },
      (err) => {console.log(err); }
    );

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={3} >
              <h3> Cities </h3>
              <Cities locations={ this.state.locations } changeLocation={ this.changeLocation }/>
            </Col>
            <Col xs={12} md={9} >
              {
                this.state.location._id ?
                  <Location
                    currentLocation={ this.state.location }
                    locations={ this.state.locations }
                    posts={ this.state.posts }
                    addPost={ this.addPost }
                    user={this.props.user}/> :
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
