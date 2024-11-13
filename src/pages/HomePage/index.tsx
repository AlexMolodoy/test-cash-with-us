'use client';

import MainTitle from '@/components/MainTitlte';
import PartnerButton from '@/components/PartnerButton';
import CardsModule from '@/modules/CardsModule';

export default function HomePage() {
  return (
    <>
      <MainTitle />
      <CardsModule />
      <PartnerButton />
    </>
  );
}
