/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import { saveState } from 'utils/localStorage';
import {
  FETCH_EMPLOYEE_DATA_SUBMIT,
  FETCH_EMPLOYEE_DATA_SUCCESS,
  FETCH_EMPLOYEE_DATA_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  data: {},
  error: false,
  errorMessage: '',
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEE_DATA_SUBMIT:
      return state.set('loading', true).set('error', false);
    case FETCH_EMPLOYEE_DATA_SUCCESS:
      saveState(action.payload.data, 'dashboard');
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.payload.data);
    case FETCH_EMPLOYEE_DATA_FAILURE:
      return state
        .set('loading', false)
        .set('error', true)
        .set('errorMessage', true);
    default:
      return state;
  }
}

export default dashboardReducer;
