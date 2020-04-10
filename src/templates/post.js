/** @typedef {import('typedef').Post} Post */
import React from 'react'
import { graphql } from 'gatsby'
import PostDetail from '../components/PostDetail'
import SEO from '../components/SEO'

// Code snippets theme for Prism
import 'prismjs/themes/prism-solarizedlight.css'

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Post
    }
  }
`

const PostTemplate = ({ data, pageContext }) => {
  /** @type {Post} post */
  const post = data.markdownRemark
  const { previous, next, slug } = pageContext

  return (
    <>
      <SEO
        title={post.meta.title}
        pathname={slug}
        type="article"
        description={post.excerpt}
        datePublished={post.meta.published}
        dateUpdated={post.meta.updated}
        isBlogPost={true}
      />
      <PostDetail post={post} nextPost={next} previousPost={previous} />
    </>
  )
}

export default PostTemplate
