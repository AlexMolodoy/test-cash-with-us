import CardTitle from '@/components/CardTitle';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  number: number;
  title: string;
  icon: StaticImageData;
};

const Card: React.FC<CardProps> = ({ number, title, icon }) => {
  return (
    <div className={`${styles.card} ${styles[`card${number}`]}`}>
      <CardTitle number={number} title={title} />
      <Image
        src={icon}
        alt={title}
        className={`${styles.cardImage} ${styles[`cardImage${number}`]}`}
      />
    </div>
  );
};

export default Card;
