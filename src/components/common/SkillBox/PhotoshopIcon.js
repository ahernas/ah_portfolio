import React from 'react';
import styles from './SkillBox.module.scss';
import LogoPs from '../../../assets/images/logoPS.png';

const PhotoshopIcon = () => (
  <div className={styles.box}>
    <img className={styles.icon} src={LogoPs} alt="logo of photoshop"/>
    <div className={styles.text}>
      photoshop
    </div>
  </div>
);


export default PhotoshopIcon;
