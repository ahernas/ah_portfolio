import React from 'react';
import styles from './AboutTitle.module.scss';

const AboutTitle = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTitle}>
      <div className={styles.line}></div>
      <div className={styles.title}>about</div>
      <div className={styles.line}></div>
    </div>
  </div>
);

export default AboutTitle;
