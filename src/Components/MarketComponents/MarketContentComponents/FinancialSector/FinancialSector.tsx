import React from 'react';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import MarketWrap from '../../MarketContent/MarketContentSC';

const FinancialSector:React.FC = () => (
  <MarketWrap>
    <Flex>
      <AdaptiveSidebar />
    </Flex>
    FinancialSector
  </MarketWrap>
);

export default FinancialSector;
