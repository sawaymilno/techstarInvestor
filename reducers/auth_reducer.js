// import { Actions } from 'react-native-router-flux';
import {
  // FACEBOOK_LOGIN_SUCCESS,
  // FACEBOOK_LOGIN_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

// export default function (state = {}, action) {
//   switch (action.type) {
//     case FACEBOOK_LOGIN_SUCCESS:
//       return { token: action.payload };
//     case FACEBOOK_LOGIN_FAIL:
//       return { token: null };
//     default:
//       return state;
//   }
// }

const INITIAL_STATE = { 
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
     case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
    return state;
  }
}
