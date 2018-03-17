import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // overwrites state object email -> ...state -> produce new object to compare
      return { ...state, email: action.payload }; 
    case PASSWORD_CHANGED:
      // overwrites state object password -> ...state -> produce new object to compare
      return { ...state, password: action.payload }; 
    case LOGIN_USER_SUCCESS:
      // "...INITIAL_STATE" -> clean version of reseting initial state
      return { ...state, ...INITIAL_STATE, user: action.payload }; 
    case LOGIN_USER_FAIL:
      return { ...state, error: 'AUTH FAILED', password: '', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default: 
      return state;
  }
};
