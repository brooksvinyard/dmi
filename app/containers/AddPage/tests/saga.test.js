/**
 * Tests for AddPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { POST_STRINGS } from '../constants';
import { postStringSuccess, postStringError } from '../actions';

import addPageSaga, { postString } from '../saga';

const string = 'Hello World';

/* eslint-disable redux-saga/yield-effects */
describe('postString Saga', () => {
  let postStringGenerator;

  beforeEach(() => {
    postStringGenerator = postString();

    const selectDescriptor = postStringGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = postStringGenerator.next(string).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the postStringSuccess action if it requests the data successfully', () => {
    const response = [
      {
        string: 'Hello World',
      },
    ];
    const putDescriptor = postStringGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(postStringSuccess(response, string)));
  });

  it('should call the postStringError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = postStringGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(postStringError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const addPageSagaSaga = addPageSaga();

  it('should start task to watch for LOAD_STRINGS action', () => {
    const takeLatestDescriptor = addPageSagaSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(POST_STRINGS, postString));
  });
});
