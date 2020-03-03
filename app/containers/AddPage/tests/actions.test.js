import {
  changeString,
  postString,
  postStringSuccess,
  postStringError,
} from '../actions';
import {
  CHANGE_STRING,
  POST_STRINGS,
  POST_STRINGS_SUCCESS,
  POST_STRINGS_ERROR,
} from '../constants';

describe('AddPage actions', () => {
  describe('Change String Action', () => {
    it('has a type of CHANGE_STRING', () => {
      const string = 'Hello';
      const expected = {
        type: CHANGE_STRING,
        string,
      };
      expect(changeString('Hello')).toEqual(expected);
    });
  });
  describe('Post String Action', () => {
    it('has a type of POST_STRINGS', () => {
      const expected = {
        type: POST_STRINGS,
      };
      expect(postString()).toEqual(expected);
    });
  });
  describe('Post String Success Action', () => {
    it('has a type of POST_STRINGS_SUCCESS', () => {
      const expected = {
        type: POST_STRINGS_SUCCESS,
      };
      expect(postStringSuccess()).toEqual(expected);
    });
  });
  describe('Post String Error Action', () => {
    it('has a type of POST_STRINGS_ERROR', () => {
      const error = 500;
      const expected = {
        type: POST_STRINGS_ERROR,
        error,
      };
      expect(postStringError(error)).toEqual(expected);
    });
  });
});
