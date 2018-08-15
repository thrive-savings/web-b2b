import { takeLatest, call, put } from 'redux-saga/effects';

import config from 'config'; //eslint-disable-line
import request from 'utils/request';

import {
  FETCH_EMPLOYEE_DATA_SUBMIT,
  FETCH_EMPLOYEE_DATA_URL,
} from './constants';
import { fetchEmployeeDataSuccess, fetchEmployeeDataFailure } from './actions';

export function* fetchEmployeeDataSubmit() {
  const requestURL = `${config.apiRoot}/${FETCH_EMPLOYEE_DATA_URL}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL, {
      method: 'GET',
    });
    yield put(fetchEmployeeDataSuccess(res));
  } catch (err) {
    yield put(fetchEmployeeDataFailure(err));
  }
}

// Individual exports for testing
export default function* fetchEmployeeDataWatched() {
  yield takeLatest(FETCH_EMPLOYEE_DATA_SUBMIT, () => fetchEmployeeDataSubmit());
}
