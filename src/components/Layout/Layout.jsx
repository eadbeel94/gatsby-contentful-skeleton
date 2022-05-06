import React from "react";
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';

import Seo from "../SEO";
import theme from '../../styles/theme';

import '../../styles/global.css';

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Seo/>
      <header></header>
      <main>
        {children}
      </main>
      <footer></footer>
    </ChakraProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
