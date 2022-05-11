import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTwitter,
//   faFacebookF,
//   faYoutube,
//   faLinkedinIn,
// } from '@fortawesome/free-brands-svg-icons';

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
          {/*<div className={'col-sm-6 col-md-4 text-right ' + styles.socialMedia}>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <a href='/#'>*/}
          {/*        <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href='/#'>*/}
          {/*        <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href='/#'>*/}
          {/*        <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href='/#'>*/}
          {/*        <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
