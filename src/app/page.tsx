"use client";

import Card from "@/components/Card";
import PartnerButton from "@/components/PartnerButton";
import CASH_IMAGE from './assets/cash.png';
import PARTNER_IMAGE from './assets/partner.png';
import SOCIAL_IMAGE from './assets/social.png';
import './page.css';

export default function Home() {
  return (
    <>
        <h3 className="main-title">
          Зарабатывайте вместе с нами!
        </h3>

        <div className="content-container">
          <Card title={"Получите партнерскую ссылку"} icon={PARTNER_IMAGE} number={1} />
          <Card title={"Расскажите о IIII.COM"} icon={SOCIAL_IMAGE} number={2} />
          <Card title={`Получайте хороший процент от покупок по вашей ссылке!`} icon={CASH_IMAGE} number={3}  />
        </div>
        
        <PartnerButton/>
    </>

  );
}


