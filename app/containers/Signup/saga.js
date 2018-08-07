import { takeLatest, call, put } from 'redux-saga/effects';

import config from 'config'; //eslint-disable-line
import request from 'utils/request';

import { SIGNUP_SUBMIT, SIGNUP_URL } from './constants';
import { signupSuccess, signupFailure } from './actions';

export function* signupSubmit(data) {
  const requestURL = `${config.apiRoot}/${SIGNUP_URL}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL, {
      body: JSON.stringify({ data }),
    });
    yield put(signupSuccess(res));
  } catch (err) {
    yield put(signupFailure(err));
  }
}

// Individual exports for testing
export default function* signupWatcher() {
  yield takeLatest(SIGNUP_SUBMIT, ({ payload }) => signupSubmit(payload));
}
