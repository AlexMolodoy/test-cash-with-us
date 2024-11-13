'use client';

import Card from '../Card';
import CASH_IMAGE from './assets/cash.png';
import PARTNER_IMAGE from './assets/partner.png';
import SOCIAL_IMAGE from './assets/social.png';
import styles from './CardsModule.module.css';

export default function CardsModule() {
  return (
    <div className={styles.contentContainer}>
      <Card
        title={'Получите партнерскую ссылку'}
        icon={PARTNER_IMAGE}
        number={1}
      />
      <Card title={'Расскажите о IIII.COM'} icon={SOCIAL_IMAGE} number={2} />
      <Card
        title={`Получайте хороший процент от покупок по вашей ссылке!`}
        icon={CASH_IMAGE}
        number={3}
      />
    </div>
  );
}
