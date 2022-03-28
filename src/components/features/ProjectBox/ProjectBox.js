import React from 'react';
import styles from './ProjectBox.module.scss';


const ProjectBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.box}>
        <div className={styles.imageBox}>
          <img src='https://i.postimg.cc/3wBXgxcs/phone-orange-min.png' alt='Image of project'/>
        </div>
        <div className={styles.descriptionBox}>
          My plants <br/> Shop website design
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.descriptionBox}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className={styles.imageBox}>
          <img src='https://i.postimg.cc/3Ny25Cxh/laptop-orange-min.png' alt='Image of project'/>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectBox;
