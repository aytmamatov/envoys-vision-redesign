import React from 'react';
import { useTranslation } from 'react-i18next';
import AnaliticsList from '../AnaliticsList/AnaliticsList';
import AnaliticsSearchHeader from '../AnaliticsSearchHeader/AnaliticsSearchHeader';

const AnaliticsEC:React.FC = () => {
  const { t } = useTranslation();

  const [info] = React.useState({
    header: [
      t('analitics.eAnalitics.H1'),
      t('analitics.eAnalitics.H2'),
      t('analitics.eAnalitics.H3'),
      t('analitics.eAnalitics.H4'),
      t('analitics.eAnalitics.H5'),
      t('analitics.eAnalitics.H6'),
      t('analitics.eAnalitics.H7'),
      t('analitics.eAnalitics.H8'),
      t('analitics.eAnalitics.H9'),
    ],
    list: [],
  });

  return (
    <>
      <AnaliticsSearchHeader />

      <AnaliticsList list={info.list} header={info.header} earning />
    </>
  );
};

export default AnaliticsEC;
