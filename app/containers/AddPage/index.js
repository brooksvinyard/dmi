/*
 * AddPage
 *
 * This page lets the user add more strings, at the '/add' route
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';

import Button from 'components/Button';
import Paper from 'components/Paper';
import H2 from 'components/H2';
import Input from 'components/Input';
import P from 'components/P';

import Error from './Error';
import saga from './saga';
import reducer from './reducer';
import {
  makeSelectAddPage,
  makeSelectAddString,
  makeSelectAddSuccess,
  makeSelectAddError,
} from './selectors';
import { changeString, postString } from './actions';

// export class AddPage extends React.Component {
export function AddPage({
  postSuccess,
  error,
  onChangeString,
  onPostString,
  string,
}) {
  const success = postSuccess ? (
    <P>String successfully added to database.</P>
  ) : (
    <></>
  );

  const postError = error ? (
    <Error>There was an error adding the string to the database.</Error>
  ) : (
    <></>
  );

  return (
    <Paper>
      <H2>Add a new String</H2>
      <P>Add a new string below.</P>
      <form onSubmit={onPostString}>
        <Input
          id="string"
          type="text"
          value={string}
          onChange={onChangeString}
          required
          placeholder="Hello World!"
        />

        <Button onSubmit={onPostString}>Add String</Button>
      </form>
      {success}
      {postError}
    </Paper>
  );
}

const mapStateToProps = createStructuredSelector({
  addPage: makeSelectAddPage(),
  string: makeSelectAddString(),
  postSuccess: makeSelectAddSuccess(),
  error: makeSelectAddError(),
});

AddPage.propTypes = {
  postSuccess: PropTypes.bool,
  error: PropTypes.bool,
  onChangeString: PropTypes.func,
  onPostString: PropTypes.func,
  string: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: e => dispatch(changeString(e.target.value)),
    onPostString: e => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(postString());
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'addPage', reducer });
const withSaga = useInjectSaga({ key: 'addPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(AddPage);
