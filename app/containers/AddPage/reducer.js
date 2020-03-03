/*
 *
 * AddPage reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_STRING,
  POST_STRINGS,
  POST_STRINGS_SUCCESS,
  POST_STRINGS_ERROR,
} from './constants';

export const initialState = {
  string: '',
  posting: false,
  error: false,
  postSuccess: false,
};

/* eslint-disable default-case, no-param-reassign */
const addPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.string = action.string;
        break;

      case POST_STRINGS:
        draft.posting = true;
        draft.error = false;
        draft.postSuccess = false;
        break;

      case POST_STRINGS_SUCCESS:
        draft.posting = false;
        draft.error = false;
        draft.postSuccess = true;
        draft.string = '';
        break;

      case POST_STRINGS_ERROR:
        draft.loading = false;
        draft.error = true;
        draft.postSuccess = false;
        break;
    }
  });

export default addPageReducer;
