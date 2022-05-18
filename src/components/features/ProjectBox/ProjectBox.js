import React from 'react';
import styles from './ProjectBox.module.scss';
import RunningHead from '../../common/RunningHead/RunningHead';
import ProjectMyPlants from '../../common/ProjectMyPlants/ProjectMyPlants';
import ProjectPortfolio from '../../common/ProjectPortfolio/ProjectPortfolio';
import ProjectToDoApp from '../../common/ProjectToDoApp/ProjectToDoApp';


const ProjectBox = () => (
  <div id="project-box" className={styles.root}>
    <div className={'container ' + styles.box}>
      <RunningHead title={'portfolio'}/>
      <ProjectPortfolio/>
      <ProjectMyPlants/>
      <ProjectToDoApp/>
    </div>
  </div>
);

export default ProjectBox;
