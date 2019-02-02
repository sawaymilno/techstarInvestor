import { combineReducers } from 'redux';
import auth from './auth_reducer';
import form from './form_reducer';
import likedJobs from './likes_reducer';

export default combineReducers({
  auth, 
  form, 
  likedJobs
});
