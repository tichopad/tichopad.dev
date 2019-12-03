import React from 'react';
import { Link } from 'gatsby';

import styles from './PostsListItem.module.scss';

export default function PostsListItem({ post }) {
  return (
    <article key={post.id}>
      <h2>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>
      <time className={styles.listItemDate}>{post.frontmatter.date}</time>
      <p>{post.excerpt}</p>
    </article>
  );
}
