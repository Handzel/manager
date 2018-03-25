import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';


// One action creator for multiple actions from form
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

// export const employeeCreate = ({ name, phone, shift }) => ({
//   type: EMPLOYEE_CREATE,
//   payload: { name, phone, shift }
// });

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // we dont really need to return anything
  // we will use redux-thunk without dispatch to break the rules
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop(); //Actions.pop() -> navigate back
      }); 
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
