import React from 'react';
import styles from './ContactBox.module.scss';
import RunningHead from '../../common/RunningHead/RunningHead';

const ContactBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <RunningHead title={'contact'}/>
      <div className={styles.box}>
        <div className={styles.text}>

        </div>
        <div className={styles.image}>
          <img src='https://i.postimg.cc/g2W2XHYL/image-girl-v-contact-min.png'/>
        </div>
      </div>
    </div>
  </div>
);

export default ContactBox;

