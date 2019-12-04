import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO';
import PostBody from 'components/PostBody';

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next, slug } = pageContext;

  return (
    <PostBody previous={previous} next={next}>
      <SEO title={post.frontmatter.title} pathname={slug} type="article" />
      <h4>
        <Link to="/">
          ←tichopad<small>.dev</small>
        </Link>
      </h4>
      <h1>{post.frontmatter.title}</h1>
      <p>
        <small>
          <time>{post.frontmatter.date}</time>
        </small>
      </p>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostBody>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "Do MMMM, YYYY", locale: "cs-CZ")
      }
    }
  }
`;
