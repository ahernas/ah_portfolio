import React from 'react';
//import styles from './Homepage.module.scss';

import TopBar from '../../layout/TopBar/TopBar';
import Header from '../../layout/Header/Header';
import ProjectBox from '../../features/ProjectBox/ProjectBox';
import Footer from '../../layout/Footer/Footer';
import AboutBox from '../../features/AboutBox/AboutBox';
import SkillsBox from '../../features/SkillsBox/SkillsBox';


const HomePage = () => (
  <div>
    <TopBar/>
    <Header/>
    <AboutBox/>
    <ProjectBox/>
    <SkillsBox/>
    <Footer/>
  </div>
);

export default HomePage;
