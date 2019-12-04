import React from 'react';
import Body from 'components/Body';
import { Link } from 'gatsby';
import styles from './PostBody.module.scss';

export default function PostBody({ previous, next, children }) {
  return (
    <Body>
      {children}
      <nav className={styles.navigation}>
        {previous && (
          <h4 className={styles.navigationLinkPrev}>
            <Link to={previous.fields.slug} role="prev">
              ←{previous.frontmatter.title}
            </Link>
          </h4>
        )}
        {next && (
          <h4 className={styles.navigationLinkNext}>
            <Link to={next.fields.slug} role="next">
              {next.frontmatter.title}→
            </Link>
          </h4>
        )}
      </nav>
    </Body>
  );
}
