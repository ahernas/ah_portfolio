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
            <a href="/">O mnie</a>
          </li>
          <li>
            <a href="/">Projekty</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TopBar;
