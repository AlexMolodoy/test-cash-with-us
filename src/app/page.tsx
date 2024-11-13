'use client';

import MainTitle from '@/components/MainTitlte';
import PartnerButton from '@/components/PartnerButton';
import CardContainer from '@/modules/CardContainer';

export default function Home() {
  return (
    <>
      <MainTitle />
      <CardContainer />
      <PartnerButton />
    </>
  );
}
