import React from 'react';
import styles from './ContactBox.module.scss';
import RunningHead from '../../common/RunningHead/RunningHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const ContactBox = () => (
  <div id="contact" className={styles.root}>
    <div className='container'>
      <RunningHead title={'contact'}/>
      <div className={styles.box}>
        <div className={styles.text}>
          <a href='//github.com/ahernas/'>
            <div className={styles.link}>linkedin.com/in/anna-hernas/</div>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn}/>
          </a>
          <a href='//linkedin.com/in/anna-hernas/'>
            <div className={styles.link}>a@hern.as</div>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope}/>
          </a>
          <a href='//linkedin.com/in/anna-hernas/'>
            <div className={styles.link}>https://github.com/ahernas</div>
            <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
          </a>
        </div>
        <div className={styles.image}>
          <img src='https://i.postimg.cc/g2W2XHYL/image-girl-v-contact-min.png'/>
        </div>
      </div>
    </div>
  </div>
);

export default ContactBox;

