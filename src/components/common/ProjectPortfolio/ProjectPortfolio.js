import React from 'react';
import styles from '../ProjectMyPlants/ProjectMyPlants.module.scss';

const ProjectPortfolio = () => (
  <div>
    <div className={styles.box}>
      <div className={styles.name}>
        Portfolio <br/> website design
      </div>
      <div className={'d-flex justify-content-end ' + styles.imageBox}>
        <img src='https://i.postimg.cc/zGpPVg9S/phone-pink-portfolio-min.png' alt='Image of project'/>
      </div>

    </div>
    <div className={styles.box}>
      <div className={'d-flex justify-content-start ' + styles.imageBox}>
        <img src='https://i.postimg.cc/FRzdtsrC/laptop-pink-portfolio-min.png' alt='Image of project'/>
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          The project was created in order to build my own portfolio.<br/>Working tools: Git, GitHub, Heroku
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

export default ProjectPortfolio;
