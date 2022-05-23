import React from 'react';
import styles from './ProjectMyPlants.module.scss';
import MyPlantsPhone from '../../../assets/images/phone_orange-min.png';
import MyPlantsLaptop from '../../../assets/images/laptop_orange-min.png';

const ProjectMyPlants = () => (
  <div>
    <div className={styles.box}>
      <div className={styles.name}>
        My plants <br/> Shop website design
      </div>
      <div className={'d-flex justify-content-end ' + styles.imageBox}>
        <img src={MyPlantsPhone} alt='View of project'/>
      </div>

    </div>
    <div className={styles.box}>
      <div className={'d-flex justify-content-start ' + styles.imageBox}>
        <img src={MyPlantsLaptop} alt='View of project'/>
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
