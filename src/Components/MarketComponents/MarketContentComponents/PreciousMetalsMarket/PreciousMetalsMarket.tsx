import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'
import { MarketTitle } from '../KgMarket/KgMarketSC'
import { MarketCard, MarketCards, MarketCardsTitle, MarketCardsWrap, MarketPMMItem, MarketPMMList } from './PreciousMetalsMarketSC'
import {useTranslation} from "react-i18next";

const PreciousMetalsMarket:React.FC = () => {
    const {t} = useTranslation()
    return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      <MarketTitle margin='0 0 30px' width='848px'>
        {t("markets.preciousMetalsMarket.title")}
      </MarketTitle>

      <MarketPMMList>
        <MarketPMMItem>
          {t("markets.preciousMetalsMarket.list1.item1")}
        </MarketPMMItem>
        <MarketPMMItem>
          {t("markets.preciousMetalsMarket.list1.item2")}
        </MarketPMMItem>
        <MarketPMMItem>
          {t("markets.preciousMetalsMarket.list1.item3")}
        </MarketPMMItem>
      </MarketPMMList>


      <MarketCardsWrap>
        <MarketCardsTitle>
          {t("markets.preciousMetalsMarket.preTitle")}
        </MarketCardsTitle>

        <MarketCards>
          <MarketCard>
            {t("markets.preciousMetalsMarket.list2.item1")}
          </MarketCard>
          <MarketCard>
            {t("markets.preciousMetalsMarket.list2.item2")}
          </MarketCard>
          <MarketCard>
            {t("markets.preciousMetalsMarket.list2.item3")}
          </MarketCard>
          <MarketCard>
            {t("markets.preciousMetalsMarket.list2.item4")}
          </MarketCard>
        </MarketCards>
      </MarketCardsWrap>
    </MarketWrap>
  )
}

export default PreciousMetalsMarket