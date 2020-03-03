/*
 * Home Actions
 *
 */

import { GET_STRINGS } from './constants';

/**
 * Gets the strings from the database
 *
 * @return {object} An action object with a type of GET_STRINGS
 */
export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}
