import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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

// action creator made in redux-thunk
// it returns a function
// return(dispatch) keyword and then manually in .then define dispatch

// 1st First/long version
// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(user => {
//       dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//     })
//     .catch(() => {
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then(user => {
//           dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//         });
//     });
//   };
// };

// 2nd version using helper functions
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main(); //this calls for key of <Scene key="main" />
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};
