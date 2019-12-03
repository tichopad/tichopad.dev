import React from 'react';

import styles from './Body.module.scss';

export default function Body({ children }) {
  return <main className={styles.container}>{children}</main>;
}
