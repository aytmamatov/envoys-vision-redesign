import React from 'react';
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

const CompaniesList:React.FC<Props> = ({ companies }) => (
  <CLWrap>
    <CLItem>
      <CLItemTitle>Код</CLItemTitle>
      <CLItemTitle>Компания</CLItemTitle>
      <CLItemTitle>Капитализация, млрд сом</CLItemTitle>
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

export default CompaniesList;
