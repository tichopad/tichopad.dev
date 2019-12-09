import React from 'react';
import styles from './Body.module.scss';

/**
 * Main body layout component
 * @param {{ children: React.ReactNode }} props
 */
export default function Body({ children }) {
  return <main className={styles.container}>{children}</main>;
}
