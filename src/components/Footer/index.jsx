import React from 'react';
import styles from './Footer.module.scss';

/**
 * Footer layout component
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy;&nbsp;{currentYear !== 2019 && `2019&nbsp;-&nbsp;`}
          {currentYear} Michael Tichopád
        </p>
      </div>
    </footer>
  );
}
