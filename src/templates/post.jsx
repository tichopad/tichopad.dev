import React from 'react';
import { graphql, Link } from 'gatsby';

import Body from 'components/Body';
import SEO from 'components/SEO';
import PostBottomNavigation from 'components/PostBottomNavigation';

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Body>
      <SEO title={post.frontmatter.title} />
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
      <PostBottomNavigation previous={previous} next={next} />
    </Body>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
