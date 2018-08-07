import { takeLatest, call, put } from 'redux-saga/effects';

import config from 'config'; //eslint-disable-line
import request from 'utils/request';

import { LOGIN_SUBMIT, LOGIN_URL } from './constants';
import { loginSuccess, loginFailure } from './actions';

export function* loginSubmit(data) {
  const requestURL = `${config.apiRoot}/${LOGIN_URL}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL, {
      body: JSON.stringify({ data }),
    });
    yield put(loginSuccess(res));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

// Individual exports for testing
export default function* loginWatcher() {
  yield takeLatest(LOGIN_SUBMIT, ({ payload }) => loginSubmit(payload));
}
