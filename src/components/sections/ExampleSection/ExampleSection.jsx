import React from 'react';
import PropTypes from 'prop-types';
import { Center } from '@chakra-ui/react';

import ExampleElement from '../../elements/ExampleElement';

function ExampleSection({ title }) {
  return (
    <Center as="div" h="100vh" w="100vw" bgColor="blue.100">
      <ExampleElement content={title} />
    </Center>
  )
};

ExampleSection.propTypes = {
  title: PropTypes.string,
};

ExampleSection.defaultProps = {
  title: '',
};

export default ExampleSection;
