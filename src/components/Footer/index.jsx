import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy;&nbsp;{currentYear !== 2019 && `2019&nbsp;-&nbsp;`}
          {currentYear} Michael Tichopád
        </p>
        {/* <p>
          <a href="#">Github</a>
          &nbsp;&middot;&nbsp;
          <a href="#">Linkedin</a>
          &nbsp;&middot;&nbsp;
          <a href="#">E-mail</a>
        </p> */}
      </div>
    </footer>
  );
}
