import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { POST_STRINGS } from './constants';
import { postStringSuccess, postStringError } from './actions';

import { makeSelectAddString } from './selectors';

export function* postString() {
  const string = yield select(makeSelectAddString());

  const postURL = `http://localhost:3000/api/v1/strings/`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string }),
  };
  try {
    yield call(request, postURL, options);
    yield put(postStringSuccess());
  } catch (err) {
    yield put(postStringError(err));
  }
}

export default function* addPageSaga() {
  yield takeLatest(POST_STRINGS, postString);
}
