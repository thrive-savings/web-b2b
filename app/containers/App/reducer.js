/*
 *
 * Auth reducer
 *
 */
import { fromJS } from 'immutable';
import { saveState } from 'utils/localStorage';

import {
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'containers/Login/constants';
import {
  SIGNUP_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from 'containers/Signup/constants';
import { LOGOUT } from './constants';

export const initialState = fromJS({
  loading: false,
  data: {},
  error: false,
  errorMessage: '',
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    // Login cases
    case LOGIN_SUBMIT:
      return state.set('loading', true).set('error', false);
    case LOGIN_SUCCESS:
      saveState(action.payload.data);
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.payload.data);
    case LOGIN_FAILURE:
      return state
        .set('loading', false)
        .set('error', true)
        .set('errorMessage', true);

    // Signup cases
    case SIGNUP_SUBMIT:
      return state.set('loading', true).set('error', false);
    case SIGNUP_SUCCESS:
      saveState(action.payload.data);
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.payload.data);
    case SIGNUP_FAILURE:
      return state
        .set('loading', false)
        .set('error', true)
        .set('errorMessage', true);

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export default authReducer;
