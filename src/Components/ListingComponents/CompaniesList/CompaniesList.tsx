import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CLItem, CLItemName, CLItemNameC, CLItemTitle, CLWrap,
} from './CompaniesListSC';

interface Props {
  companies: Array<{
    code: string
    name: string
    cap: string
  }>
}

const CompaniesList:React.FC<Props> = ({ companies }) => {
  const { t } = useTranslation();

  return (
    <CLWrap>
      <CLItem>
        <CLItemTitle>{t('listing.table.header1')}</CLItemTitle>
        <CLItemTitle>{t('listing.table.header2')}</CLItemTitle>
        <CLItemTitle>{t('listing.table.header3')}</CLItemTitle>
      </CLItem>
      {companies.map((el, index) => (
        <CLItem key={index}>
          <CLItemName to="#" className="line">{el.code}</CLItemName>
          <CLItemName to="#">{el.name}</CLItemName>
          <CLItemNameC>{el.cap}</CLItemNameC>
        </CLItem>
      ))}
    </CLWrap>
  );
};

export default CompaniesList;
