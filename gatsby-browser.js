const React = require('react');
const Layout = require('./src/components/Layout/Layout.jsx').default;

exports.wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
};
