import React from 'react';
import styles from './ProjectBox.module.scss';
import RunningHead from '../../common/RunningHead/RunningHead';


const ProjectBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <RunningHead className={styles.title} title={'portfolio'}/>
      <div className={styles.box}>
        <div className={styles.name}>
        My plants <br/> Shop website design
        </div>
        <div className={'d-flex justify-content-end ' + styles.imageBox}>
          <img src='https://i.postimg.cc/3wBXgxcs/phone-orange-min.png' alt='Image of project'/>
        </div>

      </div>
      <div className={styles.box}>
        <div className={'d-flex justify-content-start ' + styles.imageBox}>
          <img src='https://i.postimg.cc/3Ny25Cxh/laptop-orange-min.png' alt='Image of project'/>
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className={styles.link}>
            <a href='//github.com/ahernas/Shop-myplants'>github</a>
            <a href='//my-plant.herokuapp.com/'>heroku</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default ProjectBox;
