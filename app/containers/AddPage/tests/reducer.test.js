import produce from 'immer';
import addPageReducer from '../reducer';
import {
  changeString,
  postString,
  postStringSuccess,
  postStringError,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      string: '',
      posting: false,
      error: false,
      postSuccess: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action correctly', () => {
    const string = 'Hello World!';
    const expectedResult = produce(state, draft => {
      draft.string = 'Hello World!';
    });

    expect(addPageReducer(state, changeString(string))).toEqual(expectedResult);
  });

  it('should handle the postString action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.posting = true;
      draft.error = false;
      draft.postSuccess = false;
    });

    expect(addPageReducer(state, postString())).toEqual(expectedResult);
  });

  it('should handle the postStringSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.posting = false;
      draft.error = false;
      draft.postSuccess = true;
      draft.string = '';
    });

    expect(addPageReducer(state, postStringSuccess())).toEqual(expectedResult);
  });

  it('should handle the postStringError action correctly', () => {
    const error = 500;
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = true;
      draft.postSuccess = false;
    });

    expect(addPageReducer(state, postStringError(error))).toEqual(
      expectedResult,
    );
  });
});
