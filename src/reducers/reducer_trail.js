import { FETCH_TRAIL } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
  case FETCH_TRAIL:
    return { ...state, [action.payload.data.id]: action.payload.data };
    // return [...state, action.payload.data,];
    
  default:
    return state;
  }
}