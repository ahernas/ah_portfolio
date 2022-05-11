import React from 'react';

import TopBar from '../../layout/TopBar/TopBar';
import Header from '../../layout/Header/Header';
import ProjectBox from '../../features/ProjectBox/ProjectBox';
import Footer from '../../layout/Footer/Footer';
import AboutBox from '../../features/AboutBox/AboutBox';
import SkillsBox from '../../features/SkillsBox/SkillsBox';
import ContactBox from '../../features/ContactBox/ContactBox';


const HomePage = () => (
  <div>
    <TopBar/>
    <Header/>
    <AboutBox/>
    <SkillsBox/>
    <ProjectBox/>
    <ContactBox/>
    <Footer/>
  </div>
);

export default HomePage;
