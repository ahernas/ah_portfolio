import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTopBar}>
      <div className={styles.logo}>
        <img src='https://i.postimg.cc/R07gDdpS/projekt-logo-last-min.png' alt='logo'/>
      </div>
      <div className={'d-flex align-items-center ' + styles.list}>
        <ul>
          <li>
            <a href="#about-box">about</a>
          </li>
          <li>
            <a href="#skills-box">skills</a>
          </li>
          <li>
            <a href="#project-box">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TopBar;
