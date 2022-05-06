import React from "react";
import PropTypes from 'prop-types';

import ExampleSection from "../components/sections/ExampleSection";

function Example({ pageContext }) {
  const { titlePage } = pageContext;

  return (
    <div>
      <ExampleSection title={titlePage} />
    </div>
  );
};

Example.propTypes = {
  pageContext: PropTypes.shape({
    titlePage: PropTypes.string,
  }).isRequired
};

Example.defaultProps = {};

export default Example;
