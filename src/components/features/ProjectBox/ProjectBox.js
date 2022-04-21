import React from 'react';
import styles from './ProjectBox.module.scss';
import RunningHead from '../../common/RunningHead/RunningHead';
import ProjectMyPlants from '../../common/ProjectMyPlants/ProjectMyPlants';
import ProjectPortfolio from '../../common/ProjectPortfolio/ProjectPortfolio';


const ProjectBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <RunningHead title={'portfolio'}/>
      <ProjectPortfolio/>
      <ProjectMyPlants/>
    </div>
  </div>
);

export default ProjectBox;
