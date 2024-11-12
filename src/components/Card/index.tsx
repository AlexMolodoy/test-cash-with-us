import Image, { StaticImageData } from 'next/image';
import React from 'react';
import NumberCircle from '../NumberCircle';
import './card.css';

type CardProps = {
    number: number;
    title: string;
    icon: StaticImageData;
};


const Card: React.FC<CardProps> = ({ number, title, icon }) => {
   
  return (
    <div className={`card${number} card`}>
        <div className='card-title'>
            <NumberCircle number={number} />
            <span className={`title title${number}`}>{title}</span>
        </div>
        <Image src={icon} alt={title} className={`card-image card-image${number}`}/>
    </div>
  );
};


export default Card;
