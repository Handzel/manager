import {
  EMPLOYEE_UPDATE
} from './types';

// One action creator for multiple actions from form
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
