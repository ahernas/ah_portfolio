import React from 'react';
import styles from './AboutBox.module.scss';

import RunningHead from '../../common/RunningHead/RunningHead';

const AboutBox = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.aboutBox}>
      <div className={styles.textBox}>
        <RunningHead className={styles.title} title={'about'}/>
        <div className={styles.description}>
          I&#39;m a front-end developer based in Wroclaw, Poland. Since 2020, I have enjoyed writing code and solving problems.
          I have successfully completed Bootcamp Web Developer Plus run by Kodilla. My dog help me with code every day.
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.leftSide}>
          <img src='https://i.postimg.cc/1z5zRdtS/IMG-20220215-171231-min.jpg' alt='photo of dog'/>
          <img src='https://i.postimg.cc/k5BdpPG2/IMG-20220202-112842-min.jpg' alt='photo of girl and dog'/>
        </div>
        <div className={styles.rightSide}>
          <img src='https://i.postimg.cc/52jF2DTJ/IMG-20220406-152236-min.jpg' alt="dog in front of the computer "/>
        </div>
      </div>
    </div>

  </div>

);

export default AboutBox;
