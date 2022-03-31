import React from 'react';
import styles from './AboutBox.module.scss';

import RunningHead from '../../common/RunningHead/RunningHead';

const AboutBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <RunningHead title={'about'}/>
      <div className={styles.box}>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={styles.image}>
          <img src='https://i.postimg.cc/k51hCZBL/IMG-20211202-165752-min.jpg' alt="dog in front of the computer "/>
        </div>
      </div>

    </div>
  </div>
);

export default AboutBox;
