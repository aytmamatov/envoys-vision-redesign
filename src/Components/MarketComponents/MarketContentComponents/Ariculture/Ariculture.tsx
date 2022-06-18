import React from 'react';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import { MarketWrap } from '../../MarketContent/MarketContentSC';

const Ariculture:React.FC = () => (
  <MarketWrap>
    <Flex>
      <AdaptiveSidebar />
    </Flex>
    Ariculture
  </MarketWrap>
);

export default Ariculture;
