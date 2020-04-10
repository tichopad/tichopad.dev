/** @typedef {import('typedef').Post} Post */
import React from 'react'
import Link from '../Link'

/**
 * Post listing item
 * @param {{ post: Post }} props
 */
const PostPreview = ({ link, title, excerpt, formattedDatePublished, rawDatePublished }) => {
  return (
    <article>
      <h2>
        <Link to={link} title={title}>
          {title}
        </Link>
      </h2>
      <time dateTime={rawDatePublished}>
        <small>{formattedDatePublished}</small>
      </time>
      <p>{excerpt}</p>
    </article>
  )
}

export default PostPreview
