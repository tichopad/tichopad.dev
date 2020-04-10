const { createFilePath } = require('gatsby-source-filesystem')

const QUERY_ALL_POSTS = `
    fragment PostData on MarkdownRemark {
      fields {
        slug
      }
      meta: frontmatter {
        title
      }
    }
    query GetAllPosts {
      allMarkdownRemark(sort: { fields: frontmatter___published, order: DESC }) {
        edges {
          node {
            ...PostData
          }
          next {
            ...PostData
          }
          previous {
            ...PostData
          }
        }
      }
    }
`

exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add "slug" field to nodes created by Markdown Remark plugin
  if (node.internal.type === 'MarkdownRemark') {
    // Create slug based on pages' file path
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    actions.createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const postsResult = await graphql(QUERY_ALL_POSTS)
  const posts = postsResult.data.allMarkdownRemark.edges

  posts.forEach(({ node, next, previous }) => {
    actions.createPage({
      path: node.fields.slug,
      component: `${__dirname}/src/templates/post.js`,
      context: {
        // Data passed to context is available in page queries
        // as GraphQL variables and in page components as a "pageContext" prop
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })
}

// Override Webpack config to enable absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [`${__dirname}/src/`, 'node_modules'],
    },
  })
}
