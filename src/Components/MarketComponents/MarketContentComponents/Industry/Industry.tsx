import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'

const Industry:React.FC = () => {
  return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      Industry
    </MarketWrap>
  )
}

export default Industry