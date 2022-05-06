import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

function ExampleElement({ content }) {
  return (
    <div>
      <Text as="h1" fontSize="6xl" textAlign="center">{content}</Text>
      <Text as="h2" fontSize="6xl" textAlign="center">ExampleElement</Text>
    </div>
  )
};

ExampleElement.propTypes = {
  content: PropTypes.string,
};

ExampleElement.defaultProps = {
  content: '',
};

export default ExampleElement;
