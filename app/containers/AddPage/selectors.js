import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddPage = state => state.addPage || initialState;

const makeSelectAddString = () =>
  createSelector(
    selectAddPage,
    addPage => addPage.string,
  );

const makeSelectAddSuccess = () =>
  createSelector(
    selectAddPage,
    addPage => addPage.postSuccess,
  );

const makeSelectAddError = () =>
  createSelector(
    selectAddPage,
    addPage => addPage.error,
  );

const makeSelectAddPage = () =>
  createSelector(
    selectAddPage,
    substate => substate,
  );

export {
  selectAddPage,
  makeSelectAddString,
  makeSelectAddSuccess,
  makeSelectAddError,
  makeSelectAddPage,
};
