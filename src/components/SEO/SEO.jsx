import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      <meta content={site.siteMetadata.title} name="title" />
    </Helmet>
  );
};

SEO.propTypes = {};

SEO.defaultProps = {};

export default SEO;
