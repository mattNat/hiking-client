import React, { Component } from 'react';
import { connect } from 'react-redux';
// clearly identical to anchor tag
import { Link } from 'react-router-dom';
import { fetchTrails, fetchCoordinates } from '../actions';
import _ from 'lodash';
import SearchBar from '../containers/search_bar';
import Sidebar from './sidebar';

// when are we going to call reaction creator
// react lifecycle method
class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {
    // action creator, will console.log twice
    // this.props.fetchCoordinates();
    // this.props.fetchPosts();

    if (!this.props.fetchCoordinates) {
      // feed lines below
      this.props.fetchCoordinates();
    }

    // if (!this.props.fetchTrails) {
    //   // feed lines below
    //   this.props.fetchTrails();
    // }
    // this.props.fetchTrails(32.715738, -117.1610838);

    // console.log(this.props.coordinates);
    // const coor = (Object.values(this.props.coordinates)[0]) || {};
    // console.log(coor);
    
    
  }

  renderPosts() {
    // console.log(this.props.coordinates);
    
    // axios.get(url)

    const coor = (Object.values(this.props.coordinates)[0]) || {};
    console.log(coor.trails);
    const coor2 = ((coor.results));    
    // console.log(coor2);
    let coorProps = {};
    for (var key in coor2) {
      coorProps = (Object.values(coor2[0])[2].location);
    }
    console.log(coorProps.lat, coorProps.lng);
    
    const latCoor = coorProps.lat;
    const lonCoor = coorProps.lng;

    // fetch trails for lat long coordinates
    // this.props.fetchTrails(latCoor, lonCoor);
    // this.props.fetchTrails('32.715738', '-117.1610838');
    



    // console.log(coorProps);
    
    // for (var key in coor2) {
    //   if (coor2.hasOwnProperty(key)) {
    //     console.log(key);
    //   }
    // }
    
    
    // const test = this.props.trails[0];
    // if (!this.props.trails[0]) {
    //   <div>loading...</div>
    // } else {
    //   const test= 
    // }
    const myTrails = this.props.trails[0] || {};
    // console.log(this.props.trails[0]);
    // console.log(this.state);
    
    console.log('From post_index.js:', myTrails.trails);
    // console.log(this.props.posts);
    
    return _.map(coor.trails, trail => {
      return (
        <li className='list-group-item' key={trail.id.toString()} >
          <Link to={`/posts/${trail.id}`} >
            Save this hike!
          </Link> <br/>
          Name: {trail.name} <br/>
          Length (round-trip): {trail.length} mi<br/>
          Condition: {trail.conditionStatus} <br/>
          Stars: {trail.stars} out of {trail.starVotes} votes <br/>
          <img src= {trail.imgSqSmall}  alt={trail.name} />
        </li>
      );
    });
  }
  

  render() {
    // will console log twice
    // console.log(this.props.posts);
    return (
      <div>
        <Sidebar />
        <SearchBar />
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Saved Posts
          </Link>
        </div>
        <h3>Find your next adventure...</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// lists of post get inside component
function mapsStateToProps(state) {
  return { 
    posts: state.posts,
    trails: state.trails,
    coordinates: state.coordinates
  };
}


// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
export default connect(mapsStateToProps, { fetchTrails, fetchCoordinates })(PostsIndex);