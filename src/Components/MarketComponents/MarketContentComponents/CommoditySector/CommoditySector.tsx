import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'
import { MarketItem, MarketItemTitle, MarketList, MarketTitle, MICImageItem, MICImageItemTitle, MICImageList, MICL } from '../KgMarket/KgMarketSC'
import {useTranslation} from "react-i18next";

const CommoditySector:React.FC = () => {
    const {t} = useTranslation()
    return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      <MarketTitle margin='0 0 30px' width=''>
        {t("markets.commoditySector.title")}
      </MarketTitle>

      <MarketList>
        <MarketItemTitle>
          {t("markets.commoditySector.list1.itemTitle")}
        </MarketItemTitle>

        <MarketItem>
          {t("markets.commoditySector.list1.item1")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item2")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item3")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item4")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item5")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item6")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item7")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item8")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item9")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list1.item10")}
        </MarketItem>
      </MarketList>

      <MICL>
        <MarketItemTitle>
          {t("markets.commoditySector.list2.itemTitle")}
        </MarketItemTitle>

        <MarketItem>
          {t("markets.commoditySector.list2.item1")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list2.item2")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list2.item3")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list2.item4")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list2.item5")}
        </MarketItem>
        <MarketItem>
          {t("markets.commoditySector.list2.item6")}
        </MarketItem>
      </MICL>


      <MICImageList image={require('../../../../Assets/Images/Market/marketBgС2.jpg')}>
          <MICImageItemTitle>
            {t("markets.commoditySector.list3.itemTitle")}
          </MICImageItemTitle>

          <MICImageItem>
            {t("markets.commoditySector.list3.item1")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.commoditySector.list3.item2")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.commoditySector.list3.item3")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.commoditySector.list3.item4")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.commoditySector.list3.item5")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.commoditySector.list3.item6")}
          </MICImageItem>
          <MICImageItem>
            {t("markets.commoditySector.list3.item7")}
          </MICImageItem>
        </MICImageList>
    </MarketWrap>
  )
}

export default CommoditySector