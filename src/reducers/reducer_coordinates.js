import { FETCH_COORDINATES } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
  case FETCH_COORDINATES:
    return [ action.payload.data, ...state];
  default:
    return state;
  }
}