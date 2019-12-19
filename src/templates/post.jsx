import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO';
import PostBody from 'components/PostBody';

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next, slug } = pageContext;

  return (
    <PostBody previous={previous} next={next}>
      <SEO
        title={post.meta.title}
        pathname={slug}
        type="article"
        description={post.excerpt}
        datePublished={post.metaFormatted.published}
        dateUpdated={post.metaFormatted.updated}
        isBlogPost={true}
      />
      <h4>
        <Link to="/">
          ←tichopad<small>.dev</small>
        </Link>
      </h4>
      <h1>{post.meta.title}</h1>
      <p>
        <small>
          <time dateTime={post.meta.published}>{post.metaFormatted.published}</time>
        </small>
      </p>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostBody>
  );
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Post
    }
  }
`;
