const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const result = await graphql(`
    {
      allContentfulPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(
      "Error while running GraphQL query.",
      JSON.stringify(result.errors)
    )
  }

  result.data.allContentfulPosts.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
