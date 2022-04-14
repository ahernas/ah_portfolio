import React from 'react';
import styles from './ProjectBox.module.scss';
import RunningHead from '../../common/RunningHead/RunningHead';
import ProjectMyPlants from '../../common/ProjectMyPlants/ProjectMyPlants';


const ProjectBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <RunningHead className={styles.title} title={'portfolio'}/>
      <ProjectMyPlants/>
    </div>
  </div>
);

export default ProjectBox;
