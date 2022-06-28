import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>

    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-sm-12 col-md-4 empty'></div>
          <div className={'col-sm-6 col-md-4 text-center ' + styles.copyright}>
            <p className={styles.copyrightParagraph}>
              ©Copyright by Anna Hernas | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
