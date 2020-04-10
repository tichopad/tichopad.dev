/** @typedef {import('typedef').Post} Post */
import React from 'react'
import { Container } from '../Layout'
import Link from '../Link'
import LinkHomepage from '../LinkHomepage'
import { BottomNav, BottomNavItem } from './postDetailStyles'

/**
 * Renders post content's detail
 * @param {{ post: Post, previousPost: Post | null, nextPost: Post | null}} props
 */
const PostDetail = ({ post, previousPost, nextPost }) => (
  <Container as="main">
    <h4>
      <LinkHomepage />
    </h4>
    <h1>{post.meta.title}</h1>
    <p>
      <small>
        <time dateTime={post.meta.published}>{post.metaFormatted.published}</time>
      </small>
    </p>
    <article dangerouslySetInnerHTML={{ __html: post.html }} />
    <BottomNav>
      {previousPost && (
        <BottomNavItem previous>
          <Link to={previousPost.fields.slug} role="prev" title={previousPost.meta.title}>
            ←{previousPost.meta.title}
          </Link>
        </BottomNavItem>
      )}
      {nextPost && (
        <BottomNavItem next>
          <Link to={nextPost.fields.slug} role="next" title={nextPost.meta.title}>
            {nextPost.meta.title}→
          </Link>
        </BottomNavItem>
      )}
    </BottomNav>
  </Container>
)

export default PostDetail
