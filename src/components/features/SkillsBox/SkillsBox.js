import React from 'react';
import styles from './SkillsBox.module.scss';

import TitleBox from '../../common/TitleBox/TitleBox';
import SkillBox from '../../common/SkillBox/SkillBox';
import RunningHead from '../../common/RunningHead/RunningHead';
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
import PhotoshopIcon from '../../common/SkillBox/PhotoshopIcon';

const SkillsBox = () => (
  <div id="skills-box" className={styles.root}>
    <div className={styles.lineBox}>
      <img src="https://i.postimg.cc/h4mLgBk2/linie-ukos22-min.png" alt="green and yellow lines"/>
    </div>
    <div className='container'>
      <RunningHead title={'skills'}/>
      <div className={styles.frontendSkills}>
        <TitleBox text={'front-end'}></TitleBox>
        <div className={styles.iconBox}>
          <SkillBox iconName={faHtml5} skillName={'Html'}/>
          <SkillBox iconName={faCss3} skillName={'css'}/>
          <SkillBox iconName={faBootstrap} skillName={'bootstrap'}/>
          <SkillBox iconName={faJs} skillName={'javascript'}/>
          <SkillBox iconName={faReact} skillName={'react&redux'}/>
          <SkillBox iconName={faSass} skillName={'sass'}/>
        </div>
      </div>
      <div className={styles.backendSkills}>
        <TitleBox text={'back-end'}></TitleBox>
        <div className={styles.iconBox}>
          <SkillBox iconName={faNodeJs} skillName={'node js'}/>
          <SkillBox iconName={faEnvira} skillName={'mongo db'}/>
        </div>
      </div>
      <div className={styles.tools}>
        <TitleBox text={'tools'}></TitleBox>
        <div className={styles.iconBox}>
          <SkillBox iconName={faGit} skillName={'git'}/>
          <SkillBox iconName={faNpm} skillName={'npm'}/>
          <SkillBox iconName={faYarn} skillName={'yarn'}/>
          <SkillBox iconName={faJira} skillName={'jira'}/>
          <SkillBox iconName={faSlack} skillName={'slack'}/>
          <PhotoshopIcon/>

        </div>
      </div>

    </div>
    <div className={styles.lineBox}>
      <img src="https://i.postimg.cc/h4mLgBk2/linie-ukos22-min.png" alt="green and yellow lines"/>
    </div>
  </div>
);

export default SkillsBox;
