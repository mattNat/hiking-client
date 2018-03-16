import React, { Component } from 'react';
import { connect } from 'react-redux';
// clearly identical to anchor tag
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

// when are we going to call reaction creator
// react lifecycle method
class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {
    // action creator, will console.log twice

    this.props.fetchPosts();
  }

  renderPosts() {
    // const test = this.props.trails[0];
    // if (!this.props.trails[0]) {
    //   <div>loading...</div>
    // } else {
    //   const test= 
    // }
    const myPosts = this.props.posts || {};
    // console.log(this.props.trails[0]);
    // console.log(this.state);
    
    console.log('From post_index.js:', myPosts);
    // console.log(this.props.posts);
    
    return _.map(myPosts, post => {
      return (
        <li className='list-group-item' key={post.id.toString()} >
          User: {post.user} <br/>
          Comment: {post.comment} <br/>
          Hike Date: {post.date} <br/><br/>
          Name: {post.name} <br/>
          Length (round-trip): {post.length} mi<br/>
          Condition: {post.conditionStatus} <br/>
          Stars: {post.stars} out of {post.starVotes} votes <br/>
          <a href={post.url}>Trail coordinates</a> <br/>
          <img src= {post.imgSqSmall}  alt={post.name} />
        </li>
      );
    });
  }
  

  render() {
    // will console log twice
    // console.log(this.props.posts);
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/'>
            Back to index
          </Link>
        </div>
        <h3>Saved Trails</h3>
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
  };
}


// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
export default connect(mapsStateToProps, { fetchPosts })(PostsIndex);