import {
  selectAddPage,
  makeSelectAddString,
  makeSelectAddSuccess,
  makeSelectAddError,
  makeSelectAddPage,
} from '../selectors';

import { initialState } from '../reducer';

describe('selectAddPage', () => {
  it('should select the addPage initial state', () => {
    const addPageState = {
      string: '',
      postSuccess: false,
      error: false,
      posting: false,
    };
    expect(selectAddPage(initialState)).toEqual(addPageState);
  });

  it('should select the addPage state', () => {
    const addPageState = {
      string: '',
      postSuccess: false,
      error: false,
    };
    const mockedState = {
      addPage: addPageState,
    };
    expect(selectAddPage(mockedState)).toEqual(addPageState);
  });
});

describe('makeSelectAddString', () => {
  const stringSelector = makeSelectAddString();
  it('should select the string', () => {
    const string = 'Hello World!';
    const mockedState = {
      addPage: {
        string,
      },
    };
    expect(stringSelector(mockedState)).toEqual(string);
  });
});

describe('makeSelectAddSuccess', () => {
  const stringSelector = makeSelectAddSuccess();
  it('should select the postSuccess', () => {
    const postSuccess = true;
    const mockedState = {
      addPage: {
        postSuccess,
      },
    };
    expect(stringSelector(mockedState)).toEqual(true);
  });
});

describe('makeSelectAddError', () => {
  const stringSelector = makeSelectAddError();
  it('should select the error', () => {
    const error = true;
    const mockedState = {
      addPage: {
        error,
      },
    };
    expect(stringSelector(mockedState)).toEqual(true);
  });
});

describe('makeSelectAddPage', () => {
  const stringSelector = makeSelectAddPage();
  it('should select the addPage', () => {
    const addPageState = {
      string: '',
      postSuccess: false,
      error: false,
    };
    const mockedState = {
      addPage: addPageState,
    };
    expect(stringSelector(mockedState)).toEqual(addPageState);
  });
});
