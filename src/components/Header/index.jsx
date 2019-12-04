import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './Header.module.scss';
import RandomColorText from 'components/RandomColorText';
import ExternalLink from 'components/ExternalLink';

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              email
              github
              linkedin
            }
          }
        }
      }
    `
  );
  const { email, github, linkedin } = data.site.siteMetadata.author;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          tichopad
          <RandomColorText defaultColor="rebeccapurple">
            <small>.dev</small>
          </RandomColorText>
        </h1>
        <p className={styles.social}>
          <ExternalLink to={github}>GitHub</ExternalLink>&nbsp;&middot;
          <ExternalLink to={linkedin}>LinkedIn</ExternalLink>&nbsp;&middot;
          <ExternalLink to={`mailto:${email}`}>Mail</ExternalLink>
        </p>
      </div>
    </header>
  );
}
