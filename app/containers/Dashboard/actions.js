/*
 *
 * Dashboard actions
 *
 */

import {
  FETCH_EMPLOYEE_DATA_SUBMIT,
  FETCH_EMPLOYEE_DATA_SUCCESS,
  FETCH_EMPLOYEE_DATA_FAILURE,
} from './constants';

export function fetchEmployeeDataSubmit() {
  return {
    type: FETCH_EMPLOYEE_DATA_SUBMIT,
  };
}

export function fetchEmployeeDataSuccess(data) {
  return {
    type: FETCH_EMPLOYEE_DATA_SUCCESS,
    payload: data,
  };
}

export function fetchEmployeeDataFailure(data) {
  return {
    type: FETCH_EMPLOYEE_DATA_FAILURE,
    payload: data,
  };
}
