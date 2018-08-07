/*
 *
 * Login actions
 *
 */

import { LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function loginSubmit(data) {
  return {
    type: LOGIN_SUBMIT,
    payload: data,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFailure(data) {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
}
