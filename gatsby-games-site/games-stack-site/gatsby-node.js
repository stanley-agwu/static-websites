const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
    query markdowns {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
      
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/markdowns/${node.frontmatter.slug}`,
            component: path.resolve("./src/templates/game-details.js"),
            context: {slug: node.frontmatter.slug }
        })
    })
}
