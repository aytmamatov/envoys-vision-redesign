import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'
import { MarketTitle } from '../KgMarket/KgMarketSC'
import { MarketCard, MarketCards, MarketCardsTitle, MarketCardsWrap, MarketPMMItem, MarketPMMList } from './PreciousMetalsMarketSC'

const PreciousMetalsMarket:React.FC = () => {
  return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      <MarketTitle margin='0 0 30px' width='848px'>
        РЫНОК ЦВЕТНЫХ МЕТАЛЛОВ И АЛМАЗОВ
      </MarketTitle>

      <MarketPMMList>
        <MarketPMMItem>
          РЫНОК ЦВЕТНЫХ МЕТАЛЛОВ
        </MarketPMMItem>
        <MarketPMMItem>
          РЫНОК КРЕДИТОВАНИЯ ДРАГОЦЕННЫХ МЕТАЛЛОВ
        </MarketPMMItem>
        <MarketPMMItem>
          РЫНОК АЛМАЗА И ДРАГОЦЕННЫХ КАМНЕЙ
        </MarketPMMItem>
      </MarketPMMList>


      <MarketCardsWrap>
        <MarketCardsTitle>
          ИНФРАСТРУКТУРНЫЕ ПАРТНЕРЫ, БИРЖИ
        </MarketCardsTitle>

        <MarketCards>
          <MarketCard>
            Депозитарий, клиринговый центр
          </MarketCard>
          <MarketCard>
            Банк
          </MarketCard>
          <MarketCard>
            Аффинажное предприятие
          </MarketCard>
          <MarketCard>
            Лаборатория
          </MarketCard>
        </MarketCards>
      </MarketCardsWrap>
    </MarketWrap>
  )
}

export default PreciousMetalsMarket