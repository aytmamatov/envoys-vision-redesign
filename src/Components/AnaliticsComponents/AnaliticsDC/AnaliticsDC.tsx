import React from 'react';
import AnaliticsList from '../AnaliticsList/AnaliticsList';
import AnaliticsSearchHeader from '../AnaliticsSearchHeader/AnaliticsSearchHeader';

const AnaliticsDC:React.FC = () => {
  const [info, setInfo] = React.useState({
    header: [
      'Тикер',
      'Наименование',
      'Выплаты по предыдущим дивидендам',
      'Дата выплаты',
      'Размер дивидендов',
      'Указанный годовой дивиденд',
      'Дата объявления',
    ],
    list: [
      // ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      // ['NXPI', 'HighPeak Energy, dsa.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      // ['NXPI', 'HighPeak Energy, bekas.', '02/01/2022', '02/01/2022',  '0.025', '0.1', '01/11/2022'],
      // ['NXPI', 'HighPeak Energy, lsd.', '02/01/2022', '02/01/2022',  '0.025', '0.1', '01/11/2022'],
      // ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      // ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
    ],
  });

  return (
    <>
      <AnaliticsSearchHeader />

      <AnaliticsList list={info.list} header={info.header} earning={false} />
    </>
  );
};

export default AnaliticsDC;
