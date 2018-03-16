import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoordinates, fetchTrails } from '../actions/index';

/*
set controlled state
*/
class SearchBar extends Component {
  // instead this.state use store
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      lat: '',
      lon: ''
    };

    // this (which is an instance of search bar)
    // this.onInputChangeLat = this.onInputChangeLat.bind(this);
    // this.onInputChangeLon = this.onInputChangeLon.bind(this);    
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    // action creator, will console.log twice
    // this.props.fetchCoordinates();
    // this.props.fetchPosts();
    if (!this.props.fetchCoordinates) {
      // feed lines below
      this.props.fetchCoordinates();
    }
  }

  // event object is vanilla js thing
  // this?  whenever we hand callback function
  // onInputChangeLat(event) {
  //   // this.setState (I don't have it)
  //   this.setState({lat: event.target.value});
  // }

  // onInputChangeLon(event) {
  //   // this.setState (I don't have it)
  //   this.setState({lon: event.target.value});
  // }

  onInputChange(event) {
    // this.setState (I don't have it)
    this.setState({address: event.target.value});    
    console.log('TARGET:', event.target.value);
    
    // don't set state on input change
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    
    // fetch coordinates with google geolocation
    console.log('ADDRESS', this.state.address);
    // 1st time, no coor so we create them
    this.props.fetchCoordinates().then(test => {
      // res.send(test);
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    });
    
    console.log(this.props.coordinates);
    
    // let 69 happen inside of a promise
    // extract lat and long coordinates; 1st no this.coor (wait before we go here api fetch coor)
    const coor = (Object.values(this.props.coordinates)[0] || {});
    // console.log(coor);
    const coor2 = ((coor.results));    
    // console.log(coor2);
    let coorProps = {};
    for (var key in coor2) {
      coorProps = (Object.values(coor2[0])[2].location);
    }
    console.log(coorProps.lat, coorProps.lng);
    this.setState({lat: coorProps.lat});
    this.setState({lon: coorProps.lng});
    console.log(this.state);
    
    // best to set state here
    // this.setState({address: event.target.value});
       

    // // We need to go and fetch weather data
    // this.props.fetchTrails(this.state.lat, this.state.lon);

    // clear search input, will pass it to value in input
    // this.setState({ address: '' });
    
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        {/* <input 
          placeholder='Latitude'
          className='form-control'
          value={this.state.lat}
          onChange={this.onInputChangeLat}
        />
        <input 
          placeholder='Longitude'
          className='form-control'
          value={this.state.lon}
          onChange={this.onInputChangeLon}
        /> */}
        <input 
          placeholder='Address or destination'
          className='form-control'
          value={this.state.address}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

// lists of post get inside component
function mapsStateToProps(state) {
  return { 
    coordinates: state.coordinates
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoordinates }, dispatch);
}

// pass null, redux does not need state here
// gives access to this.props.fetchWeather
export default connect(mapsStateToProps, mapDispatchToProps)(SearchBar);