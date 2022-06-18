import React from 'react';
import { useTranslation } from 'react-i18next';
import AnaliticsDC from '../AnaliticsDC/AnaliticsDC';
import AnaliticsEC from '../AnaliticsEC/AnaliticsEC';
import AnaliticsMC from '../AnaliticsMC/AnaliticsMC';

interface Props {
  currentPage: string;
}

const AnaliticsContent:React.FC<Props> = ({ currentPage }) => {
  const { t } = useTranslation();

  if (currentPage === t('analitics.pages.p1')) return <AnaliticsDC />;
  if (currentPage === t('analitics.pages.p2')) return <AnaliticsEC />;
  return <AnaliticsMC />;
};

export default AnaliticsContent;
