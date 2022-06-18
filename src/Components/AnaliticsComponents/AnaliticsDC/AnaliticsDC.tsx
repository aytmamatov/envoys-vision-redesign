import React from 'react';
import { useTranslation } from 'react-i18next';
import AnaliticsList from '../AnaliticsList/AnaliticsList';
import AnaliticsSearchHeader from '../AnaliticsSearchHeader/AnaliticsSearchHeader';

const AnaliticsDC:React.FC = () => {
  const { t } = useTranslation();

  const [info, setInfo] = React.useState({
    header: [
      t('analitics.dAnalitics.H1'),
      t('analitics.dAnalitics.H2'),
      t('analitics.dAnalitics.H3'),
      t('analitics.dAnalitics.H4'),
      t('analitics.dAnalitics.H5'),
      t('analitics.dAnalitics.H6'),
      t('analitics.dAnalitics.H7'),
    ],
    list: [
    ],
  });

  React.useEffect(() => {
    setInfo((val) => val);
  }, [t]);

  return (
    <>
      <AnaliticsSearchHeader />

      <AnaliticsList list={info.list} header={info.header} earning={false} />
    </>
  );
};

export default AnaliticsDC;
