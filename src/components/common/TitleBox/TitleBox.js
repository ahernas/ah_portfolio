import React from 'react';
import styles from './TitleBox.module.scss';
import PropTypes from 'prop-types';

const TitleBox = (props) => (
  <div className={styles.box}>
    <div className={styles.line}/>
    <div className={styles.text}>{props.text}</div>
    <div className={styles.line}/>
  </div>
);

TitleBox.propTypes = {
  text: PropTypes.node,
};

export default TitleBox;
