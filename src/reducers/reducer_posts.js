import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    // console.log('BEFORE', action.payload.data); // [ post1, post2 ]
    // { 4: post }
    console.log('AFTER', _.mapKeys(action.payload.data, 'id')); // [ post1, post2 ]
    
    // need it here only
    // come back later and understand
    return _.mapKeys(action.payload.data, 'id');    
  default:
    return state;
  }
}