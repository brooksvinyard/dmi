/*
 * HomePage Reducer
 *
 */

import produce from 'immer';
import { GET_STRINGS } from './constants';

// The initial state of the App
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  // eslint-disable-next-line no-unused-vars
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        break;
    }
  });

export default homeReducer;
