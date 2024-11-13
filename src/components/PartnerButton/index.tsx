import Image from 'next/image';
import React from 'react';
import styles from './PartnerButton.module.css';
import SUCCESS_ICON from './assets/success-icon.png';

const PartnerButton: React.FC = () => {
  return (
    <button className={styles.partnerButton}>
      <Image src={SUCCESS_ICON} alt="Icon" className={styles.icon} />
      <span className={styles.partnerButtonText}>Стать партнером</span>
    </button>
  );
};

export default PartnerButton;
