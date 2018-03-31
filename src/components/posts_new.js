import React, { Component } from 'react';
import { connect } from 'react-redux';
// clearly identical to anchor tag
import { fetchPosts, deletePost } from '../actions';
import _ from 'lodash';
import Sidebar from './sidebar';
import ReactStars from 'react-stars';

import './posts_new.css';
import './hover-animate.css';

// when are we going to call reaction creator
// react lifecycle method
class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {
    // action creator, will console.log twice
    this.props.fetchPosts();
    
  }

  onDeleteClick(id) {
    this.props.deletePost(id, () => {
      window.location.reload();
    });
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
      if (post.imgSmallMed === '') {
        post.imgSmallMed = 'https://i.pinimg.com/originals/a4/b0/c4/a4b0c4fc44ec75c55d7d40a1d3994435.jpg';
      }

      let name = null;

      if (post.difficulty === 'green') {
        name = 'Very Easy';
      } else if (post.difficulty === 'greenBlue') {
        name = 'Easy';
      } else if (post.difficulty === 'blue') {
        name = 'Intermediate';
      } else if (post.difficulty === 'blueBlack') {
        name = 'Challenging';
      } else if (post.difficulty === 'black') {
        name = 'Very Challenging';
      } else if (post.difficulty === 'dblack') {
        name = 'Extremely Challenging';
      } else {
        name = 'Not Provided'
      }

      return (
        <div className='post-item' key={post.id.toString()}>
          <h2>{post.name}</h2>
          <h4>
            Group/Individual Name(s): {post.user} <br/>
            Comment: {post.comment} <br/>
            Hike Date: {post.date} <br/><br/>
            <button
              className='btn btn-danger'
              // onClick={this.onDeleteClick(post.id)}
              // onClick={() => this.props.deletePost(post.id, () => {
              //   this.props.history.push('/posts/new');
              onClick={() => this.onDeleteClick(post.id)}
            >
            Delete Post
            </button>
          </h4>
          <div className="container">
            <img src={post.imgSmallMed} alt={post.name} />
            <div className="text_box">
              {/* <h1> image hover effect</h1> */}
              <p>
                <b>Location:</b> {post.location} <br/>
              <b>Lat/Long:</b> {post.latitude}, {post.longitude} <br/>       
                <b>Length (round-trip):</b> {post.length} mi<br/>
                <b>Ascent:</b> {post.ascent} ft<br/>
                <b>Condition:</b> {post.conditionStatus} <br/>
                <b>Difficulty:</b> {`${name}`}
                {/* (<img className='diff-img' src={`${imgLink}`}  alt={`${name}`} width='20px' />) <br/> */}
              </p>
              <span className='top' >
                <ReactStars 
                  // count={5}
                  value={post.stars}
                  size={24}
                  color2={'#ffd700'}
                  edit={false}
                />
                {post.starVotes} votes <br/>
              </span>
            </div>
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
        <div className='content'>
          <h1>Saved Trails</h1>
          <div className='sub-content'>
            {/* <ul className='list-group container'> */}
              {this.renderPosts()}
            {/* </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

// lists of post get inside component
// function mapsStateToProps(state) {
function mapStateToProps({ posts }, ownProps) {
  return { 
    posts: posts,
    post: posts[ownProps.match.params.id]
  };
}


// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex);