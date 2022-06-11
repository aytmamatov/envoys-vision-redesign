import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'

const CryptoMarket:React.FC = () => {
  return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      CryptoMarket
    </MarketWrap>
  )
}

export default CryptoMarket