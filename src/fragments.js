import { graphql } from 'gatsby';

/**
 * Post metadata - original fields
 */
export const postMetadata = graphql`
  fragment PostMetadata on MarkdownRemark {
    meta: frontmatter {
      title
      published
      updated
      perex
    }
  }
`;

/**
 * Post metadata - formatted fields
 */
export const postMetadataFormatted = graphql`
  fragment PostMetadataFormatted on MarkdownRemark {
    metaFormatted: frontmatter {
      published(formatString: "Do MMMM, YYYY", locale: "cs-CZ")
      updated(formatString: "Do MMMM, YYYY", locale: "cs-CZ")
    }
  }
`;

/**
 * Single post
 */
export const post = graphql`
  fragment Post on MarkdownRemark {
    id
    html
    fields {
      slug
    }
    excerpt(pruneLength: 120)
    ...PostMetadata
    ...PostMetadataFormatted
  }
`;

/**
 * All posts
 */
export const posts = graphql`
  fragment Posts on MarkdownRemarkConnection {
    edges {
      node {
        ...Post
      }
    }
  }
`;
