import React, { CSSProperties } from 'react';
import './NumberCircle.css';

type NumberCircleProps = {
  number: number;
  style?: CSSProperties;
};

const NumberCircle: React.FC<NumberCircleProps> = ({ number, style }) => {
  return (
    <div className={`number-circle number-circle${number}`} style={style}>
      {number}
    </div>
  );
};

export default NumberCircle;
