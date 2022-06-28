import React from 'react';
import styles from './ContactBox.module.scss';
import FooterImage from  '../../../assets/images/image_girl_v-contact-min.png';
import RunningHead from '../../common/RunningHead/RunningHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons';

const ContactBox = () => (
  <div id="contact" className={styles.root}>
    <div className={'container ' + styles.box}>
      <RunningHead title={'contact'}/>
      <div className={styles.boxContact}>
        <div className={styles.text}>
          <a href='//linkedin.com/in/anna-hernas/'>
            <div className={styles.link}>linkedin.com/in/anna-hernas/</div>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn}/>
          </a>
          <a href='//github.com/ahernas/'>
            <div className={styles.link}>https://github.com/ahernas</div>
            <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
          </a>
          <a href='//drive.google.com/file/d/1OzAHWcKSwoB7JB2feG7YD67RWngO27t6/view?usp=sharing'>
            <div className={styles.link}>Curriculum Vitae</div>
            <FontAwesomeIcon className={styles.icon} icon={faFile}/>
          </a>
          <a href="mailto:web.a@hern.as">
            <div className={styles.link}>a@hern.as</div>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope}/>
          </a>
        </div>
        <div className={styles.image}>
          <img src={FooterImage} alt="view of cartoon girl"/>
        </div>
      </div>
    </div>
  </div>
);

export default ContactBox;

