import React from 'react';
import ToDoAppImageOne from '../../../assets/images/laptop_green_todoapp-min.png';
import ToDoAppImageTwo from '../../../assets/images/laptop_green_todoapp2-min.png';

import styles from '../ProjectMyPlants/ProjectMyPlants.module.scss';

const ProjectToDoApp = () => (
  <div>
    <div className={styles.box}>
      <div className={styles.name}>
        to-do app <br/> website
      </div>
      <div className={'d-flex justify-content-end ' + styles.imageBox}>
        <img src={ToDoAppImageOne} alt='View of project'/>
      </div>

    </div>
    <div className={styles.box}>
      <div className={'d-flex justify-content-start ' + styles.imageBox}>
        <img src={ToDoAppImageTwo} alt='View of project'/>
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          A simple to-do app with lists, columns and cards.<br/>Working tools: Git, GitHub, Heroku <br/>
          Interface building library: React.
        </div>
        <div className={styles.link}>
          <a href='//github.com/ahernas/React-learning'>code</a>
          <a href='//to-do-app-123.herokuapp.com/'>live link</a>
        </div>
      </div>

    </div>
  </div>
);

export default ProjectToDoApp;
