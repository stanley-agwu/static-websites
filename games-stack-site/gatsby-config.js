/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdowns/`,
      },
    },
  ],
  siteMetadata: {
    title: "5 Stack Games",
    description: "Web Dev Portfolios",
    copyright: "This website is copyright &copy; 2021"
  }
}
