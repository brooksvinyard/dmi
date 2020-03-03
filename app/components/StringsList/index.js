import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import Error from './Error';
import LI from './LI';

function StringsList({ loading, error, strings }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <Error>Something went wrong, please try again!</Error>;
  }

  if (strings !== false) {
    const content = strings.map(string => (
      <LI key={string.id}>{string.string}</LI>
    ));
    return <ul>{content}</ul>;
  }

  return null;
}

StringsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default StringsList;
