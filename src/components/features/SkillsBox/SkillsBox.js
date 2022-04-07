import React from 'react';
import styles from './SkillsBox.module.css';

import TitleBox from '../../common/TitleBox/TitleBox';
import RunningHead from '../../common/RunningHead/RunningHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faEnvira, faGit,
  faHtml5, faJira,
  faJs,
  faNodeJs, faNpm,
  faReact,
  faSass, faSlack, faYarn,
} from '@fortawesome/free-brands-svg-icons';



const SkillsBox = () => (
  <div className={styles.root}>
    <div className='container'>
      <RunningHead title={'skills'}/>
      <div className={styles.frontendSkills}>
        <TitleBox className={styles.title} text={'front-end'}></TitleBox>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faSass} />
          <FontAwesomeIcon icon={faBootstrap} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
      <div className={styles.backendSkills}>
        <TitleBox className={styles.title} text={'back-end'}></TitleBox>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={faNodeJs}/>
          <FontAwesomeIcon icon={faEnvira}/>
        </div>
      </div>
      <div className={styles.tools}>
        <TitleBox className={styles.title} text={'tools'}></TitleBox>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={faGit}/>
          <FontAwesomeIcon icon={faNpm}/>
          <FontAwesomeIcon icon={faYarn}/>
          <FontAwesomeIcon icon={faJira}/>
          <FontAwesomeIcon icon={faSlack}/>
        </div>
      </div>

    </div>
  </div>
);

export default SkillsBox;
