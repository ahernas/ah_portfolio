import React from 'react';
import styles from './Header.module.scss';
import HeaderImage from '../../../assets/images/image_girl_v7.png';

const Header = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.headerBox}>
      <div className={styles.imageBox}>
        <img src={HeaderImage} alt="view of girl"/>
      </div>
      <div className={styles.textBox}>
        <div className={styles.title1}>&lt;coder&gt;</div>
        <div className={styles.title2}>Hello, <br/> I&#39;m Anna</div>
        <div className={styles.title3}>Front end developer</div>
      </div>
    </div>
  </div>
);

export default Header;
