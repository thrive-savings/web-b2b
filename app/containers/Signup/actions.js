/*
 *
 * Signup actions
 *
 */

import { SIGNUP_SUBMIT, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './constants';

export function signupSubmit(data) {
  return {
    type: SIGNUP_SUBMIT,
    payload: data,
  };
}

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
}

export function signupFailure(data) {
  return {
    type: SIGNUP_FAILURE,
    payload: data,
  };
}
