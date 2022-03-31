import React from 'react';
import styles from './RunningHead.module.scss';
import PropTypes from 'prop-types';

const RunningHead = (props) => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTitle}>
      <div className={styles.line}></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.line}></div>
    </div>
  </div>
);

RunningHead.propTypes = {
  title: PropTypes.node,
};

export default RunningHead;
