import React from 'react';
import styles from './SkillBox.module.scss';

const PhotoshopIcon = () => (
  <div className={styles.box}>
    <img className={styles.icon} src="https://i.postimg.cc/qBLYwH9Q/logoPS.png" alt="logo of photoshop"/>
    <div className={styles.text}>
      photoshop
    </div>
  </div>
);


export default PhotoshopIcon;
