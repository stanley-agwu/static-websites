/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
  ],
  siteMetadata: {
    title: "5 Stack Dev",
    description: "Web Dev Portfolios",
    copyright: "This website is copyright &copy; 2021"
  }
}
