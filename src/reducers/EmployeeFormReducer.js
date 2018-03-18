import {
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE: 
      // [] is not an array its key interpolation, they(keys) will be defined at runtime.
      // Its a ES6 syntax trick for generic, dynamic use of props ie. name, phone, shift, etc 
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE: 
      return INITIAL_STATE; // Resetting the state
    default: 
      return state;
  }
};
