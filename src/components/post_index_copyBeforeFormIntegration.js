import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrail, createPost } from '../actions';
import _ from 'lodash';

import PostsSave from './post_save';

class PostsShow extends Component {
  
  componentDidMount() {
    // // if you don't want to eagerly re-fetch posts...
    // if (!this.props.post) {
    //   // feed lines below
    // }
    // provided by react-router
    
    const { id } = this.props.match.params;
    this.props.fetchTrail(id);
  }

  // helperFunction() {
  //   this.props.posts[this.props.match.params.id];
  // }

  // onDeleteClick() {
  //   const { id } = this.props.match.params;
  //   this.props.deletePost(id, () => {
  //     // programmatic navigation
  //     this.props.history.push('/');
  //   });

  //   // // bad approach, assumes it is inside of component
  //   // this.props.deletePost(this.props.post.id);
  // }

  render() {
    // this.props.trail
    // const myTrails = this.props.trails || {};
    // console.log(myTrails);
    
    // this.props === ownProps
    // posts[this.props.match.params.id]; // post we want to show

    // this.props.match.params.id;

    const myTrail = this.props.trail.undefined || {};
    console.log((myTrail));
    
    const arrTrail = Object.values(myTrail);
    const rTrail = (Object.values(arrTrail));
    
    
    if (!myTrail) {
      return <div>Loading...</div>
    }

    // console.log('CHECK', trail.undefined);
    // for (var key in trail.undefined) {
    //   console.log(key);
    // }
    // console.log(Object.values(trail.undefined));
    // Object.keys(trail.undefined).forEach(function (key) {
    //   console.log(trail.undefined[key]);
    // });
    

    // return (
    //   <div>
    //     <Link to='/'>Back to Index</Link>
    //     {/* <button
    //       className='btn btn-danger pull-xs-right'
    //       onClick={this.onDeleteClick.bind(this)}
    //     >
    //       Delete Post
    //     </button>
    //     <h3>{post.title}</h3>
    //     <h6>Categories: {post.categories}</h6>
    //     <p>{post.content}</p> */}
    //     {/* <h3>{trail.name}</h3> */}
    //   </div>
    // );

    return _.map(myTrail.trails, trail => {
      // console.log(trail);
      
      return (
        <div>
          <PostsSave />
          {/* <Link to='/'>Back to Index</Link> */}
          <h2>Name: {trail.name}</h2>
          <h3>Location: {trail.location} </h3>
          <p>{trail.summary}</p>
          <h4>Trail Statistics:</h4>
          <ul className='list-group-item' key={trail.name + ' stats'} >
            <li>Length (round-trip): {trail.length} mi </li>
            <li>Stars: {trail.stars} out of {trail.starVotes} votes </li>
            <li>Ascent: {trail.ascent} ft </li>
            <li>Low: {trail.low} ft</li>
            <li>High: {trail.high} ft</li>
          </ul>
          <h4>Trail Condition:</h4>
          <ul className='list-group-item' key={trail.name + ' condition'} >
            <li>Date checked: {trail.conditionDate} </li>
            <li>Status: {trail.conditionStatus} </li>
            <li>Details: {trail.conditionDetails}</li>
          </ul>
          <img src= {trail.imgMedium}  alt={trail.name} />
        </div>
      );
    });

  }
}

// destructuring...just give me the list of posts
function mapStateToProps(state) {
  // return { posts };
  return { trail: state.trail }
}

export default connect(mapStateToProps, { fetchTrail })(PostsShow);