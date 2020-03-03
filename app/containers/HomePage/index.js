/*
 * HomePage
 *
 * This is the Home Page that displays all the strings, at the '/' route
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import useInjectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
} from 'containers/App/selectors';

import H2 from 'components/H2';
import P from 'components/P';
import Paper from 'components/Paper';
import StringsList from 'components/StringsList';

import saga from './saga';
import reducer from './reducer';
import { loadStrings } from '../App/actions';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadStrings();
  }

  render() {
    return (
      <Paper>
        <H2>Welcome to String Land!</H2>
        <P>Below are all the strings on the server.</P>

        <StringsList
          loading={this.props.loading}
          error={this.props.error}
          strings={this.props.strings}
        />
      </Paper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  strings: makeSelectStrings(),
});

HomePage.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.bool,
  loadStrings: PropTypes.func,
  strings: PropTypes.any,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'homePage', reducer });
const withSaga = useInjectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(HomePage);
