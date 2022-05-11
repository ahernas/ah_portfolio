import React from 'react';
import styles from './AboutBox.module.scss';

import RunningHead from '../../common/RunningHead/RunningHead';

const AboutBox = () => (
  <div id="about-box" className={styles.root}>
    <div className={'container ' + styles.box}>
      <RunningHead className={styles.title} title={'about'}/>
      <div className={styles.aboutBox}>
        <div className={styles.textBox}>
          <div className={styles.description}>
            <span>I&#39;m a front-end developer based in Wroclaw, Poland.</span> Since 2020, I have enjoyed writing code and solving problems.
            I have successfully completed Bootcamp Web Developer Plus run by Kodilla. My dog helps me with code every day.
          </div>
        </div>
        <div className={styles.imageBox}>
          <img src='https://i.postimg.cc/2y0ZqqPM/IMG-20220202-112842-min.jpg' alt='view of girl with dog'/>
        </div>

      </div>
      <div className={styles.photoWrapper}>
        <img src='https://i.postimg.cc/1z5zRdtS/IMG-20220215-171231-min.jpg' alt='view of dog'/>
        <img src='https://i.postimg.cc/NFZtN8ZR/E2654-D88-9346-4-D59-9-A70-0-E248-A1-B24-EE-min.jpg' alt='view of dog'/>
        <img src='https://i.postimg.cc/nLVL92xL/IMG-20220421-160432-min.jpg' alt='view of dog'/>
        <img src='https://i.postimg.cc/T30dxbbv/IMG-20220327-171208-min.jpg' alt='view of dog'/>
        <img src='https://i.postimg.cc/fRzs8br2/IMG-20220421-160457-min.jpg' alt='view of dog'/>
      </div>
    </div>

  </div>

);

export default AboutBox;
