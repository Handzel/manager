import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
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
  return {
    type: EMPLOYEE_CREATE,
    payload: { name, phone, shift }
  };
};

