import React from 'react';
//import styles from './Homepage.module.scss';

import TopBar from '../../layout/TopBar/TopBar';
import Header from '../../layout/Header/Header';
import ProjectBox from '../../features/ProjectBox/ProjectBox';
import Footer from '../../layout/Footer/Footer';
import AboutTitle from '../../common/AboutTitle/AboutTitle';


const HomePage = () => (
  <div>
    <TopBar/>
    <Header/>
    <AboutTitle/>
    <ProjectBox/>
    <Footer/>
  </div>
);

export default HomePage;
