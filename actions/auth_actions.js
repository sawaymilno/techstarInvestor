import firebase from 'firebase';
import axios from 'axios';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGIN_LOAD_COMPANIES
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }, callback) => {
  // console.log(callback, 'in login, callback');
  const { currentUser } = firebase.auth();

  let userObject;
  const get = async () => {
    return await firebase.database().ref(`/users/${currentUser.uid}`)
    .on('value', snapshot => {
      userObject = snapshot.val();
    });
  };
  get();

  // let companiesArray;
  // const getCompanies = async () => {
  //   return await axios.get('https://data.techstars.com/v2/companies');
  // };

  // getCompanies();
  
  // console.log(companiesArray, 'companiesArray in auth_actions');
  
  return (dispatch) => {
    //dispatch is a 'redux-thunk' function to allow async calls
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        // loginLoadCompanies(dispatch, companiesArray);
        // const { currentUser } = firebase.auth();
        // console.log('companiesArray in auth_action', companiesArray);

        // console.log(userObject, 'userObject', 'test inside loginusersuccess');

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

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  // console.log(user, 'user in loginUserSuccess');
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginLoadCompanies = (dispatch, companies) => {
  dispatch({ 
    type: LOGIN_LOAD_COMPANIES,
    payload: companies
      });
};

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
