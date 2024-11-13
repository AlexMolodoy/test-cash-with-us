import React, { CSSProperties } from 'react';
import styles from './NumberCircle.module.css';

type NumberCircleProps = {
  number: number;
  style?: CSSProperties;
};

const NumberCircle: React.FC<NumberCircleProps> = ({ number, style }) => {
  return (
    <div
      className={`${styles.numberCircle} ${styles[`numberCircle${number}`]}`}
      style={style}
    >
      {number}
    </div>
  );
};

export default NumberCircle;
