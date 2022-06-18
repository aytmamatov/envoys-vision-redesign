import React from 'react';
import DRCDD from '../DRCDD/DRCDD';
import DRCWrap from '../DRCListing/DRCListingSC';

const DRCClearing:React.FC = () => (
  <DRCWrap>
    <DRCDD
      title="Депозитарно клиринговая операция"
      insideTitle="Регламент по депозитарно-клиринговым операциям"
      insideTitlePath={require('../../../../assets/docs/Disclosure/Rules/Регламент по депозитарно-клиринговым операциям.pdf')}
      paths={[]}
    />
    <DRCDD
      title="Размешение новой эмиссий ЦБ"
      insideTitle="О депозитарном обслуживании размещения новой эмиссии ценных бумаг"
      insideTitlePath={require('../../../../assets/docs/Disclosure/Rules/О депозитарном обслуживании размещения новой эмиссии ценных бумаг.pdf')}
      paths={[]}
    />
  </DRCWrap>
);

export default DRCClearing;
