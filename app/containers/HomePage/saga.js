/**
 * Gets the strings from the database
 */

// eslint-disable-next-line no-unused-vars
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Localhost Strings request/response handler
 */
export function* getStrings() {
  const requestURL = `http://localhost:3000/api/v1/strings`;

  try {
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

export default function* stringData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
