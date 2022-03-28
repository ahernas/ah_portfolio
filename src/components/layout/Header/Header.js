import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.photo}>
        <div>&lt; coder &gt;</div>
        <div className={styles.title1}>Hello, I&#39;m Anna</div>
        <div className={styles.title2}>Front end developer</div>
      </div>
    </div>
  </div>
);

export default Header;
