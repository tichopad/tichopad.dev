import React from 'react';
import { Link } from 'gatsby';
import styles from './PostBottomNavigation.module.scss';

export default function PostBottomNavigation({ previous, next }) {
  return (
    <nav className={styles.navigation}>
      {previous && (
        <h4 className={styles.navigationLink}>
          <Link to={previous.fields.slug} role="prev">
            ←{previous.frontmatter.title}
          </Link>
        </h4>
      )}
      {next && (
        <h4 className={styles.navigationLink}>
          <Link to={next.fields.slug} role="next">
            {next.frontmatter.title}→
          </Link>
        </h4>
      )}
    </nav>
  );
}
