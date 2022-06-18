import React from 'react';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import MarketWrap from '../../MarketContent/MarketContentSC';

const MiningSector:React.FC = () => (
  <MarketWrap>
    <Flex>
      <AdaptiveSidebar />
    </Flex>
    MiningSector
  </MarketWrap>
);

export default MiningSector;
