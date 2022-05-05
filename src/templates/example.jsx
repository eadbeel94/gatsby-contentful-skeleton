import React from "react";
import PropTypes from 'prop-types';

function Example({ pageContext }) {
  const { titlePage } = pageContext;

  return <div>{titlePage}</div>
};

Example.propTypes = {
  pageContext: PropTypes.shape({
    titlePage: PropTypes.string,
  }).isRequired
};

Example.defaultProps = {};

export default Example;
