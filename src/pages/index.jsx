import React from 'react';
import { graphql } from 'gatsby';

import Body from 'components/Body';
import Header from 'components/Header';
import SEO from 'components/SEO';
import PostsListItem from 'components/PostsListItem';
import Footer from 'components/Footer';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;
  const postsList = edges.map(edge => <PostsListItem key={edge.node.id} post={edge.node} />);

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
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
