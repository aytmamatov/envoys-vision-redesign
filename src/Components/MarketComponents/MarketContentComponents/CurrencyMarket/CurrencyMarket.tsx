import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'
import { MarketItem, MarketItemTitle, MarketList, MarketTitle, MICImageItem, MICImageItemTitle, MICImageList, MICItem, MICL, MICList } from '../KgMarket/KgMarketSC'
import {useTranslation} from "react-i18next";

const CurrencyMarket:React.FC = () => {
    const {t} = useTranslation()
    return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      <MarketTitle margin='0 0 30px' width=''>
        {t("markets.currencyMarket.title1")}
      </MarketTitle>

      <MarketList>
        <MarketItemTitle>
          {t("markets.currencyMarket.list1.title")}
        </MarketItemTitle>

        <MarketItem>
          {t("markets.currencyMarket.list1.item1")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list1.item2")}
        </MarketItem>
      </MarketList>

      <MarketTitle margin='100px 0 30px' width=''>
        {t("markets.currencyMarket.title2")}
      </MarketTitle>

      <MarketList>
        <MarketItemTitle>
          {t("markets.currencyMarket.list2.title")}
        </MarketItemTitle>

        <MarketItem>
          {t("markets.currencyMarket.list2.item1")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list2.item2")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list2.item3")}
        </MarketItem>
      </MarketList>


      <MarketList>
        <MarketItemTitle>
          {t("markets.currencyMarket.list3.title")}
        </MarketItemTitle>

        <MarketItem>
          {t("markets.currencyMarket.list3.item1")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list3.item2")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list3.item3")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list3.item4")}
        </MarketItem>
      </MarketList>



        <MICImageList image={require('../../../../Assets/Images/Market/marketBgС1.jpg')}>
          <MICImageItemTitle>
            {t("markets.currencyMarket.list4.title")}
          </MICImageItemTitle>

          <MICImageItem>
            {t("markets.currencyMarket.list4.item1")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.currencyMarket.list4.item2")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.currencyMarket.list4.item3")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.currencyMarket.list4.item4")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.currencyMarket.list4.item5")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.currencyMarket.list4.item6")}
          </MICImageItem>
        </MICImageList>







      <MarketTitle width='600px' margin='100px 0 30px'>
        {t("markets.currencyMarket.title3")}
      </MarketTitle>

      <MICL>
        <MarketItem>
          {t("markets.currencyMarket.list5.item1")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list5.item2")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list5.item3")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list5.item4")}
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list5.item5.title")}
          <MICList>
            <MICItem>
              {t("markets.currencyMarket.list5.item5.item1")}
            </MICItem>
            <MICItem>
              {t("markets.currencyMarket.list5.item5.item2")}
            </MICItem>
            <MICItem>
              {t("markets.currencyMarket.list5.item5.item3")}
            </MICItem>
            <MICItem>
              {t("markets.currencyMarket.list5.item5.item4")}
            </MICItem>
          </MICList>
        </MarketItem>
        <MarketItem>
          {t("markets.currencyMarket.list6")}
        </MarketItem>
      </MICL>


    </MarketWrap>
  )
}

export default CurrencyMarket