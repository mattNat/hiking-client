import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_posts';
import PostReducer from './reducer_post';

import TrailsReducer from './reducer_trails';
import TrailReducer from './reducer_trail';
import CoordinatesReducer from './reducer_coordinates';


const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  trails: TrailsReducer,
  trail: TrailReducer,
  coordinates: CoordinatesReducer,
  // {..., Date: null, User: name}
  // view state
  form: formReducer
});

export default rootReducer;
