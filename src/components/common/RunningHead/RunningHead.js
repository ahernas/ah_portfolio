import React from 'react';
import styles from './RunningHead.module.scss';
import PropTypes from 'prop-types';

const RunningHead = (props) => (
  <div className={styles.root}>
    <div className={styles.boxTitle}>
      {props.title}.
    </div>
  </div>
);

RunningHead.propTypes = {
  title: PropTypes.node,
};

export default RunningHead;
