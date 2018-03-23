import React, { Component } from 'react';
import { connect } from 'react-redux';
// clearly identical to anchor tag
import { Link } from 'react-router-dom';
import { fetchTrails, fetchCoordinates } from '../actions';
import _ from 'lodash';
import SearchBar from '../containers/search_bar';
import Sidebar from './sidebar';
import ReactStars from 'react-stars';

import './post_index.css';
// import './float-grid.css';


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
    console.log(coor);
    // const coor2 = ((coor.results));    
    // console.log(coor2);
    // let coorProps = {};
    // for (var key in coor2) {
    //   coorProps = (Object.values(coor2[0])[2].location);
    // }
    // console.log(coorProps.lat, coorProps.lng);
    
    // const latCoor = coorProps.lat;
    // const lonCoor = coorProps.lng;

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
    
    // if i % 2 put in div 
    console.log(coor.trails);
    
    // console.log(coor.trails.map((trail, index) => console.log(trail, index)));
    
    // const trailArr = _.values(coor.trails);
    // console.log(typeof test);
    // const testArr = test.map((trail, index) => console.log(trail, index));

    // return coor.trails.map() after converted ARRAY like before
    // use index 0-addnewrow 1 2-addnewrow

    // const test = trailArr.forEach((trail, index) => {
    //   console.log(trail, index);
      
    // })

    // console.log(trailArr.slice(0,3).forEach((trail, index) => console.log(trail.name, index)
    // ));
    
      // trailArr.slice(0,2)
      
    //   // NEW WAY USING ARRAY MAPPING
    //   return trailArr.map((trail, index) => {
    //     console.log(trailArr.length);
        
    //     const repeat =  trailArr.slice(0,3).forEach((trail, index) => {
    //       <div className='list-item' className='col-4' >
    //         <img className='portrait' src= {trail.imgSmallMed}  alt={trail.name} width='300px' /> <br/>
    //         <Link to={`/posts/${trail.id}`} >
    //           Save this hike!
    //         </Link> <br/>
    //         Name: {trail.name} <br/>
    //         Length (round-trip): {trail.length} mi<br/>
    //         Condition: {trail.conditionStatus} <br/>
    //         Stars: {trail.stars} out of {trail.starVotes} votes <br/>
    //       </div>
    //     })
    //   // const repeat =  trailArr.slice(0,3).forEach((trail, index) => {
    //   //   <div className='list-item' className='col-4' >
    //   //     <img className='portrait' src= {trail.imgSmallMed}  alt={trail.name} width='300px' /> <br/>
    //   //     <Link to={`/posts/${trail.id}`} >
    //   //       Save this hike!
    //   //     </Link> <br/>
    //   //     Name: {trail.name} <br/>
    //   //     Length (round-trip): {trail.length} mi<br/>
    //   //     Condition: {trail.conditionStatus} <br/>
    //   //     Stars: {trail.stars} out of {trail.starVotes} votes <br/>
    //   //   </div>
    //   // })
    

    // console.log(repeat);
    
      
    //   if (index === 2) {
    //     return (
    //       <div key={trail.id.toString()} className='row' >
    //         {`${repeat}`}
    //       </div>
    //     )
    //   }
    // })
      
      
    

    // OLD WAY USING LODASH
    return _.map(coor.trails, trail => {
      // console.log(index);

      if (trail.imgSmallMed === '') {
        trail.imgSmallMed = 'https://i.pinimg.com/originals/a4/b0/c4/a4b0c4fc44ec75c55d7d40a1d3994435.jpg';
      }
      
      let name = null;
      // let imgLink = null;

      if (trail.difficulty === 'green') {
        name = 'Very Easy';
        // imgLink = 'https://cdn.apstatic.com/img/diff/green.svg';
      } else if (trail.difficulty === 'greenBlue') {
        name = 'Easy';
        // imgLink = 'https://cdn.apstatic.com/img/diff/greenBlue.svg';
      } else if (trail.difficulty === 'blue') {
        name = 'Intermediate';
        // imgLink = 'https://cdn.apstatic.com/img/diff/blue.svg';
      } else if (trail.difficulty === 'blueBlack') {
        name = 'Challenging';
        // imgLink = 'https://cdn.apstatic.com/img/diff/blueBlack.svg';
      } else if (trail.difficulty === 'black') {
        name = 'Very Challenging';
        // imgLink = 'https://cdn.apstatic.com/img/diff/blueBlack.svg';
      } else if (trail.difficulty === 'dblack') {
        name = 'Extremely Challenging';
        // imgLink = 'https://cdn.apstatic.com/img/diff/dblack.svg';
      } else {
        name = 'Not Provided'
        // imgLink = 'https://cdn.apstatic.com/img/diff/green.svg';        
      }

      return (
        
        // OLD
        // <li key={trail.id.toString()} >
        //   <div className='list-item' >
        //     <img className='portrait' src= {trail.imgSmallMed}  alt={trail.name} width='300px' /> <br/>
        //     <Link to={`/posts/${trail.id}`} >
        //       Save this hike!
        //     </Link> <br/>
        //     Name: {trail.name} <br/>
        //     Length (round-trip): {trail.length} mi<br/>
        //     Condition: {trail.conditionStatus} <br/>
        //     Stars: {trail.stars} out of {trail.starVotes} votes <br/>
        //   </div>
        // </li>

        // NEW
        <div key={trail.id.toString()} className='row' >
          <div className='list-item'>
            <img className='portrait' src= {trail.imgSmallMed}  alt={trail.name} width='300px' /> <br/>

            
            <Link to={`/posts/${trail.id}`} style={{ textDecoration: 'none' }} className='save-hike' > 
              Save Trail
            </Link> <br/>
              <h4 className='trail-name' > {trail.name} </h4><br/>
            <p>
              <b>Location:</b> {trail.location} <br/>
              <b>Lat/Long:</b> {trail.latitude}, {trail.longitude} <br/>              
              <b>Length (round-trip):</b> {trail.length} mi<br/>
              <b>Ascent:</b> {trail.ascent} ft<br/>
              <b>Condition:</b> {trail.conditionStatus} <br/>
              <b>Difficulty:</b> {`${name}`}
              {/* (<img className='diff-img' src={`${imgLink}`}  alt={`${name}`} width='20px' />) <br/> */}
            </p>
            {/* <span className='diff-block' >
            </span> */}
              <span className='top' >
                <ReactStars 
                  // count={5}
                  value={trail.stars}
                  size={24}
                  color2={'#ffd700'}
                  edit={false}
                />
                {trail.starVotes} votes <br/>
              </span>
          </div>
        </div>
      );
    });

  }
  

  render() {
    // will console log twice
    // console.log(this.props.posts);
    return (
      <div>
        <Sidebar />
        <div className='search-results'>
            <h3>
              Find your next adventure...
            </h3>
            <hr />
            <SearchBar />
            <div className='wrapper' >
              <ul className='itemHolder' >
                {this.renderPosts()}
              </ul>
            </div>
        </div>
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