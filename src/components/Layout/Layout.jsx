import React from "react";
import PropTypes from 'prop-types';

import Seo from "../SEO";

import '../../styles/global.css';

function Layout({ children }) {
  return (
    <>
      <Seo/>
      <header></header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
