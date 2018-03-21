import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, fetchTrails } from '../actions';

class PostsNew extends Component {
  // field.input
  /*
  onChange={field.input.onChange}
  onFocus={field.input.onFocus}
  onBlur={field.input.onBlur}
  {...field.input}
  */
  componentDidMount() {
    // action creator, will console.log twice
    // this.props.fetchPosts();
    // if (!this.props.fetchTrails) {
    //   // feed lines below
    //   this.props.fetchTrails();
    // }

    // console.log(this.props.match.params);
    

    // const { id } = this.props.match.params;
    // this.props.fetchPost(id);
      
  }

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

  // no paren, pass in ref to a function so field can re-render multiple times
  // "label" can be any property name
  // name property communicates with validation errors below
  // onSubmit needs reduc form and code we need to write
  onSubmit(values) {
    // this === component
    console.log(values);

    // must match one of the routes defined in app
    // only attempt nav only after post has been created
    // callback function created, account for in reducer
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    // passed to comp on behalf of redux form
    const { handleSubmit } = this.props;

    // redux (state and validation) cannot save/make post request
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='User'
          name='user'
          component={this.renderField}
        />
        <Field
          label='Comment'
          name='comment'
          component={this.renderField}
        />
        <Field
          label='Date'
          name='date'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Save</button>
        <Link to='/homepage' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> {title: 'asdf', categories: '', content: 'asdf'}
  const errors = {};

  // validate the inputs from 'values'
  // if (values.title.length < 3) {
  //   errors.title = 'Title must be at least 3 characters';
  // }
  if (!values.user) {
    errors.user = 'Enter a user name';
  }
  if (!values.comment) {
    errors.comment = 'Enter a comment';
  }
  if (!values.date) {
    errors.date = 'Enter a planned date';
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  return errors;
}

// lists of post get inside component
function mapsStateToProps(state) {
  return { 
    posts: state.posts,
    trails: state.trails 
  };
}

// wire up like connect helper
export default reduxForm({
  validate,
  // name of the form
  form: 'PostsNewForm'
})(
  connect(mapsStateToProps, { createPost, fetchTrails })(PostsNew)
);



// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
// export default connect(mapsStateToProps, { fetchPosts, fetchTrails })(PostsIndex);