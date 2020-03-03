import { getStrings } from '../actions';
import { GET_STRINGS } from '../constants';

describe('HomePage actions', () => {
  describe('Get String Action', () => {
    it('has a type of GET_STRINGS', () => {
      const expected = {
        type: GET_STRINGS,
      };
      expect(getStrings()).toEqual(expected);
    });
  });
});
