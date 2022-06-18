import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'
import { MarketCard, MarketCards, MarketImages, MarketItem, MarketItem2, MarketItemTitle, MarketItemTitle2, MarketList, MarketPreTitle, MarketText, MarketTitle } from './KgMarketSC'
import {useTranslation} from "react-i18next";

const KgMarket:React.FC = () => {
  const {t} = useTranslation()
  return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
    <MarketTitle margin='0 0 30px' width='700px'>
      {t("markets.stocksM.title1")}
    </MarketTitle>
      <MarketText margin='0 0 50px' width='580px'>
        {t("markets.stocksM.text1")}
      </MarketText>
      <MarketImages src={require('../../../../Assets/Images/Market/market1.jpg')}/>
      <MarketPreTitle margin='50px 0 0' width='895px'>
        {t("markets.stocksM.preTitle1")}
      </MarketPreTitle>


    <MarketTitle margin='100px 0 30px' width='770px'>
      {t("markets.stocksM.title2")}
    </MarketTitle>

    <MarketList>
      <MarketItemTitle>
        {t("markets.stocksM.list1.listTite")}
      </MarketItemTitle>

      <MarketItem>
        {t("markets.stocksM.list1.item1")}
      </MarketItem>
      <MarketItem>
        {t("markets.stocksM.list1.item2")}
      </MarketItem>
      <MarketItem>
        {t("markets.stocksM.list1.item3")}
      </MarketItem>
    </MarketList>

    <MarketImages src={require('../../../../Assets/Images/Market/market2.jpg')}/>

    <MarketTitle margin='100px 0 30px' width='770px'>
      {t("markets.stocksM.title3")}
    </MarketTitle>

    <MarketText margin='0 0 20px' width='580px'>
      {t("markets.stocksM.blockText1.text2")}
    </MarketText>
    <MarketText margin='0 0 20px' width='580px'>
      {t("markets.stocksM.blockText1.text2")}
    </MarketText>
    <MarketText margin='0 0 20px' width='580px'>
      {t("markets.stocksM.blockText1.text3")}
    </MarketText>
    <MarketText margin='0 0 100px' width='580px'>
      {t("markets.stocksM.blockText1.text4")}
    </MarketText>

    <MarketCards>
      <MarketCard>
        <h1>
          {t("markets.stocksM.list2.item1.title")}
        </h1>
        <p>
          {t("markets.stocksM.list2.item1.text1")}
        </p>
        <p>
          {t("markets.stocksM.list2.item1.text2")}
        </p>
      </MarketCard>

      <MarketCard>
        <h1>
          {t("markets.stocksM.list2.item2.title")}
        </h1>
        <p>
          {t("markets.stocksM.list2.item2.text1")}
        </p>
        <p>
          {t("markets.stocksM.list2.item2.text2")}
        </p>
      </MarketCard>

      <MarketCard>
        <h1>
          {t("markets.stocksM.list2.item3.title")}
        </h1>
        <p>
          {t("markets.stocksM.list2.item3.text1")}
        </p>
        <p>
          {t("markets.stocksM.list2.item3.text2")}
        </p>
      </MarketCard>
    </MarketCards>

    <MarketTitle margin='100px 0 30px' width='932px'>
      {t("markets.stocksM.title4")}
    </MarketTitle>

    <MarketList>
      <MarketItemTitle2>
        {t("markets.stocksM.list3.listTitle")}
      </MarketItemTitle2>
      <MarketItem2>
        {t("markets.stocksM.list3.item1")}
      </MarketItem2>
      <MarketItem2>
        {t("markets.stocksM.list3.item2")}
      </MarketItem2>
      <MarketItem2>
        {t("markets.stocksM.list3.item3")}
      </MarketItem2> 
      <MarketItem2>
        {t("markets.stocksM.list3.item4")}
      </MarketItem2> 
    </MarketList>
  </MarketWrap>
)
}

export default KgMarket