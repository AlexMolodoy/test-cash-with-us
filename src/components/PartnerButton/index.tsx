"use client";
import Image from "next/image";
import SUCCESS_ICON from './assets/success-icon.png';
import './PartnerButton.css';


const PartnerButton = ({}) => {
  return (
    <button className="partner-button" >
      <Image src={SUCCESS_ICON} alt="icon" className="icon" />
      <span className="partner-button-text">Стать партнером</span>
    </button>
  );
};

export default PartnerButton;