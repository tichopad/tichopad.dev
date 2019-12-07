const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              published
            }
          }
        }
      }
    }
  `);

  const posts = results.data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    const previous = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/post.jsx'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables and in as a "pageContext" prop
        slug: node.fields.slug,
        previous,
        next,
      },
    });
  });
};

// Override Webpack config to enable absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
