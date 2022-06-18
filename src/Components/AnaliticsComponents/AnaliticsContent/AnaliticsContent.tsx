import React from 'react';
import AnaliticsDC from '../AnaliticsDC/AnaliticsDC';
import AnaliticsEC from '../AnaliticsEC/AnaliticsEC';
import AnaliticsMC from '../AnaliticsMC/AnaliticsMC';

interface Props {
  currentPage: string;
}

const AnaliticsContent:React.FC<Props> = ({ currentPage }) => {
  if (currentPage === 'Дивидендный календарь') return <AnaliticsDC />;
  if (currentPage === 'Календарь заработка') return <AnaliticsEC />;
  return <AnaliticsMC />;
};

export default AnaliticsContent;
