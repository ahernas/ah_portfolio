import React from 'react';
import styles from './AboutBox.module.scss';
import PhotoMain from '../../../assets/images/IMG_20220202_112842-min.jpg';
import PhotoOne from '../../../assets/images/IMG_20220215_171231-min.jpg';
import PhotoTwo from '../../../assets/images/E2654D88-9346-4D59-9A70-0E248A1B24EE-min.jpeg';
import PhotoThree from '../../../assets/images/IMG_20220421_160432-min.jpg';
import PhotoFour from '../../../assets/images/IMG_20220327_171208-min.jpg';
import PhotoFive from '../../../assets/images/IMG_20220421_160457-min.jpg';

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
          <img src={PhotoMain} alt='view of girl with dog'/>
        </div>

      </div>
      <div className={styles.photoWrapper}>
        <img src={PhotoOne} alt='view of dog'/>
        <img src={PhotoTwo} alt='view of dog'/>
        <img src={PhotoThree} alt='view of dog'/>
        <img src={PhotoFour} alt='view of dog'/>
        <img src={PhotoFive} alt='view of dog'/>
      </div>
    </div>

  </div>

);

export default AboutBox;
