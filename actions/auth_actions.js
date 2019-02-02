import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = (text) => ({ type: EMAIL_CHANGED, payload: text });
export const passwordChanged = (text) => ({ type: PASSWORD_CHANGED, payload: text });

export const loginUser = ({ email, password }, callback) => {
  let userObject;
  const { currentUser } = firebase.auth();
  const get = async () => (
     await firebase.database().ref(`/users/${currentUser.uid}`)
    .on('value', snapshot => {
      userObject = snapshot.val();
  }));

  get();
  
  return (dispatch) => {
    //dispatch is a 'redux-thunk' library that allows delivering 
    //functions instead of just objects for the reducer
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        if (!userObject) {
          // console.log('in the if statement');
          firebase.database().ref(`/users/${currentUser.uid}`)
          .set({ info: '', lists: '', token: '' });
        }
        callback('form');
      })
      .catch((error) => {
        console.log(error, 'in login error');
        loginUserFail(dispatch);
      });
  };
};

const loginUserFail = (dispatch) => dispatch({ type: LOGIN_USER_FAIL });
const loginUserSuccess = (dispatch, user) => dispatch({ type: LOGIN_USER_SUCCESS, payload: user });


/**************************** OLD CODE ****************************/

// import { AsyncStorage } from 'react-native';
// import { Facebook } from 'expo';
// import { Actions } from 'react-native-router-flux';

// import {
//   FACEBOOK_LOGIN_SUCCESS,
//   FACEBOOK_LOGIN_FAIL
// } from './types';

// // How to use AsyncStorage:
// // AsyncStorage.setItem('fb_token', token);
// // AsyncStorage.getItem('fb_token');

// export const facebookLogin = () => async dispatch => {
//   let token = await AsyncStorage.getItem('fb_token');

//   if (token) {
//     // Dispatch an action saying FB login is done
//     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
//   } else {
//     // Start up FB Login process
//     doFacebookLogin(dispatch);
//   }
// };

// const doFacebookLogin = async dispatch => {
//   let { type, token } = await Facebook.logInWithReadPermissionsAsync('224978775123341', {
//     permissions: ['public_profile']
//   });

//   if (type === 'cancel') {
//     return dispatch({ type: FACEBOOK_LOGIN_FAIL });
//   }

//   await AsyncStorage.setItem('fb_token', token);
//   dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
// };
