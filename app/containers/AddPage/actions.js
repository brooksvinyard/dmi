/*
 *
 * AddPage actions
 *
 */

import {
  CHANGE_STRING,
  POST_STRINGS,
  POST_STRINGS_SUCCESS,
  POST_STRINGS_ERROR,
} from './constants';

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

export function postString() {
  return {
    type: POST_STRINGS,
  };
}

export function postStringSuccess() {
  return {
    type: POST_STRINGS_SUCCESS,
  };
}

export function postStringError(error) {
  return {
    type: POST_STRINGS_ERROR,
    error,
  };
}
