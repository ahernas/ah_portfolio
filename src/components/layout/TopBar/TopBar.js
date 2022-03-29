import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTopBar}>
      <div className={styles.logo}>
        {/*<img src='' alt='logo'/>*/}
      </div>
      <div className={'d-flex align-items-center ' + styles.list}>
        <ul>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">portfolio</a>
          </li>
          <li>
            <a href="/">skills</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TopBar;
