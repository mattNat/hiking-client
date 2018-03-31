import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrail, createPost } from '../actions';
import _ from 'lodash';

import RenderDatePicker from './date_picker';
// import Calendar from 'react-input-calendar';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';

import './posts_show.css'


// import PostsSave from './post_save';

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
  renderField(field) {
    // const myTrails = this.props.trails[0] || {};
    // console.log('From post_new.js:', myTrails.trails);    

    // es6 destructure
    const { meta } = field;

    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {/* add ternary operation to not display error at pristine condition */}
        <div className='text-help'>
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    // this === component
    console.log(values);
    // const trailData = _.map(this.props.trail.undefined, trail => {
    //   console.log(Object.keys(trail));
    // });

    // console.log(Object.values(this.props.trail.undefined)[0]);
    const trailData = ((Object.values(this.props.trail.undefined)[0])[0]);
    console.log(trailData);
    
    const submitData = Object.assign({}, values, trailData);
    console.log(submitData);
    
    
    // console.log(this.props.trail.undefined);
    

    // must match one of the routes defined in app
    // only attempt nav only after post has been created
    // callback function created, account for in reducer

    // POST TO SERVER && GO BACK TO SEARCH PAGE
    this.props.createPost(submitData, () => {
      this.props.history.push('/homepage');
    });
  };

  // renderDatePicker({input, placeholder, defaultValue, meta: {touched, error} }) {
  //   return (
  //   <div>
  //         <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
  //         {touched && error && <span>{error}</span>}
  //   </div>
  //   );
  // }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    
    // this.props.trail
    // const myTrails = this.props.trails || {};
    // console.log(myTrails);
    
    // this.props === ownProps
    // posts[this.props.match.params.id]; // post we want to show

    // this.props.match.params.id;

    const myTrail = this.props.trail.undefined || {};
    console.log((myTrail));
    
    // const arrTrail = ((Object.values(this.props.trail.undefined)[0])[0]) || [];
    
    
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
        <div key={trail.id.toString()}>
          <div className='form-main' >
            <div className='form' >
              <form className='save-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Register Hiking Trail</h3>
                <Field
                  label='Group/Individual Name(s)'
                  name='user'
                  component={this.renderField}
                  // className='feedback-input'
                />
                <Field
                  label='Comment'
                  name='comment'
                  component={this.renderField}
                />
                <div className='set-date'>Date</div>
                <Field
                  component={RenderDatePicker}
                  label='Date'
                  name='date'
                  dateFormat="DD.MM.YYYY" 
                  showYearDropdown="{true}"
                />
                {/* {this.RenderDatePicker} */}
                {/* <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} /> */}
                {/* {touched && error && <span>{error}</span>} */}
                {/* <Calendar format='DD/MM/YYYY' /> */}
                <button
                  type='submit' className='btn btn-primary'>Save
                </button>
                <Link to='/homepage' className='btn btn-danger' style={{ textDecoration: 'none' }}>Cancel</Link>
              </form>
            </div>
          </div>

          {/* <PostsSave /> */}
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
          <img className='id-img' src= {trail.imgMedium}  alt={trail.name} />
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

// wire up like connect helper
export default reduxForm({
  // validate,
  // name of the form
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, { fetchTrail, createPost })(PostsShow)
);

// export default connect(mapStateToProps, { fetchTrail })(PostsShow);