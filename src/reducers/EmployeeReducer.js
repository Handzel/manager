import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS: 
      //console.log(action)
      // firebase return object full of records NOT array
      // rather than walking through the array, finding the record we want to
      // replace, we take all the records from existing object -> '...state'
      // and create new key:value pair, where key is id of the record  
      // return { ...state, [id]: action.payload };
      return action.payload;
    default: 
      return state;
  }
};
