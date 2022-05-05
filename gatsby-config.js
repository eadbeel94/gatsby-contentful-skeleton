/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    //{
    //  resolve: `gatsby-source-contentful`,
    //  options: {
    //    spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    //    // Learn about environment variables: https://gatsby.dev/env-vars
    //    accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    //  },
    //},
  ],
}
