import React from 'react';
import styles from '../ProjectMyPlants/ProjectMyPlants.module.scss';
import PortfolioImagePhone from '../../../assets/images/phone_pink_portfolio2-min.png';
import PortfolioImageLaptop from '../../../assets/images/laptop_pink_portfolio2-min.png';

const ProjectPortfolio = () => (
  <div>
    <div className={styles.box}>
      <div className={styles.name}>
        Portfolio <br/> website design
      </div>
      <div className={'d-flex justify-content-end ' + styles.imageBox}>
        <img src={PortfolioImagePhone} alt='View of project'/>
      </div>

    </div>
    <div className={styles.box}>
      <div className={'d-flex justify-content-start ' + styles.imageBox}>
        <img src={PortfolioImageLaptop} alt='View of project'/>
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          The project was created in order to build my own portfolio.<br/>Working tools: Git, GitHub, Heroku <br/>
          Interface building library: React.
        </div>
        <div className={styles.link}>
          <a href='//github.com/ahernas/ah_portfolio'>code</a>
          <a href='//anna.hern.as'>live link</a>
        </div>
      </div>

    </div>
  </div>
);

export default ProjectPortfolio;
