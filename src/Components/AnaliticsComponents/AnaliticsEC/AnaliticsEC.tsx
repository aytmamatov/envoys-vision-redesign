import React from 'react';
import AnaliticsList from '../AnaliticsList/AnaliticsList';
import AnaliticsSearchHeader from '../AnaliticsSearchHeader/AnaliticsSearchHeader';

const AnaliticsEC:React.FC = () => {
  const [info, setInfo] = React.useState({
    header: [
      'time',
      'Symbol',
      'Company Name',
      'Market Cap',
      'Fiscal Quarter Ending',
      'Consensus EPS* Forecast',
      '# Of Ests',
      "Last Year's Report Date",
      "Last Year's EPS*",
    ],
    list: [
      // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],
      // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],
      // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],
      // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],

    ],
  });

  return (
    <>
      <AnaliticsSearchHeader />

      <AnaliticsList list={info.list} header={info.header} earning />
    </>
  );
};

export default AnaliticsEC;
