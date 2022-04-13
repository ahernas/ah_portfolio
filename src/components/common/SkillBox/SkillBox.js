import React from 'react';
import styles from './SkillBox.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillBox = (props) => (
  <div className={styles.box}>
    <FontAwesomeIcon className={styles.icon} icon={props.iconName}/>
    <div className={styles.text}>
      {props.skillName}
    </div>
  </div>
);

SkillBox.propTypes = {
  iconName: PropTypes.object,
  skillName: PropTypes.node,
};

export default SkillBox;
