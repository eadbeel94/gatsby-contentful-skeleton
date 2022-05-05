/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Contentful Skeleton`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: '',
    siteUrl: `https://example.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-contentful-skeleton`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/example.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'graphql',
        path: `${__dirname}/src/graphql`,
      },
    },
    //{
    //  resolve: `gatsby-source-contentful`,
    //  options: {
    //    spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    //    // Learn about environment variables: https://gatsby.dev/env-vars
    //    accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    //    environment: process.env.GATSBY_CONTENTFUL_ENVIRONMENT,
    //  },
    //},
  ],
}
