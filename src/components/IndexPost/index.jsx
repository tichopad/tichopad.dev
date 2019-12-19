/** @typedef {import('typedef').Post} Post */
import React from 'react';
import { Link } from 'gatsby';
import styles from './IndexPost.module.scss';

/**
 * Index page post list item component
 * @param {{ post: Post }} props
 */
export default function IndexPost({ post }) {
  return (
    <article key={post.id}>
      <h2>
        <Link to={post.fields.slug}>{post.meta.title}</Link>
      </h2>
      <time className={styles.date}>{post.metaFormatted.published}</time>
      <p>{post.meta.perex || post.excerpt}</p>
    </article>
  );
}
