import NumberCircle from '@/components/NumberCircle';
import React from 'react';
import styles from './CardTitle.module.css';

type CardTitleProps = {
  number: number;
  title: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ number, title }) => {
  return (
    <div className={styles.cardTitle}>
      <NumberCircle number={number} />
      <span className={`${styles.title} ${styles[`title${number}`]}`}>
        {title}
      </span>
    </div>
  );
};

export default CardTitle;
