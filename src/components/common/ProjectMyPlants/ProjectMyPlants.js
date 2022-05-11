import React from 'react';
import styles from './ProjectMyPlants.module.scss';

const ProjectMyPlants = () => (
  <div>
    <div className={styles.box}>
      <div className={styles.name}>
        My plants <br/> Shop website design
      </div>
      <div className={'d-flex justify-content-end ' + styles.imageBox}>
        <img src='https://i.postimg.cc/3wBXgxcs/phone-orange-min.png' alt='View of project'/>
      </div>

    </div>
    <div className={styles.box}>
      <div className={'d-flex justify-content-start ' + styles.imageBox}>
        <img src='https://i.postimg.cc/3Ny25Cxh/laptop-orange-min.png' alt='View of project'/>
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          The project was created in order to learn page coding.<br/>Working tools: Git, GitHub, MongoDB, Express, MongoDB Atlas, Mongoose, Heroku
          Interface building library: React.
        </div>
        <div className={styles.link}>
          <a href='//github.com/ahernas/Shop-myplants'>code</a>
          <a href='//my-plant.herokuapp.com/'>live link</a>
        </div>
      </div>

    </div>
  </div>
);

export default ProjectMyPlants;
