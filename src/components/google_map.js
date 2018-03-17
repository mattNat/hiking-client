import React, { Component } from 'react';

class GoogleMap extends Component {
  // lifectcle method that component has been rendered to the screen
  componentDidMount() {
    // take a ref to an html node/element
    new google.maps.Map(this.refs.map, {
      // zoom from st to planet 12 is a glance of city
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      // this.refs.map
      <div ref='map' />
    );
  }
}

// see index.html for script tag that is importing the google maps
export default GoogleMap;