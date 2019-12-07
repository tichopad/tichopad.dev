import React from 'react';
import { graphql } from 'gatsby';
import Body from 'components/Body';
import Header from 'components/Header';
import SEO from 'components/SEO';
import IndexPost from 'components/IndexPost';
import Footer from 'components/Footer';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;
  const postsList = edges.map(edge => <IndexPost key={edge.node.id} post={edge.node} />);

  return (
    <>
      <Header />
      <Body>
        <SEO title="Blog" />
        {postsList}
      </Body>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___published], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            published(formatString: "Do MMMM, YYYY", locale: "cs-CZ")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 120)
        }
      }
    }
  }
`;
