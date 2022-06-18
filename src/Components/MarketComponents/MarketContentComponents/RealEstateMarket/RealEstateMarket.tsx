import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import MarketWrap from '../../MarketContent/MarketContentSC';
import {
  MarketItem, MarketItemTitle, MarketList, MarketPreTitle, MarketText, MarketTitle,
} from '../KgMarket/KgMarketSC';

const RealEstateMarket:React.FC = () => {
  const { t } = useTranslation();
  return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar />
      </Flex>
      <MarketTitle margin="0 0 50px" width="">
        {t('markets.realEstateMarket.title')}
      </MarketTitle>

      <MarketPreTitle margin="0 0 50px" width="580px">
        {t('markets.realEstateMarket.preTitle1')}
      </MarketPreTitle>

      <MarketPreTitle margin="0 0 50px" width="580px">
        {t('markets.realEstateMarket.preTitle2')}
      </MarketPreTitle>

      <MarketText margin="0 0 20px" width="580px">
        {t('markets.realEstateMarket.textBlock.text1')}
      </MarketText>
      <MarketText margin="0 0 20px" width="580px">
        {t('markets.realEstateMarket.textBlock.text2')}
      </MarketText>
      <MarketText margin="0 0 20px" width="580px">
        {t('markets.realEstateMarket.textBlock.text3')}
      </MarketText>
      <MarketText margin="0 0 100px" width="580px">
        {t('markets.realEstateMarket.textBlock.text4')}
      </MarketText>

      <MarketList>
        <MarketItemTitle>
          {t('markets.realEstateMarket.list1.title')}
        </MarketItemTitle>

        <MarketItem>
          {t('markets.realEstateMarket.list1.item1')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list1.item2')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list1.item3')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list1.item4')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list1.item5')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list1.item6')}
        </MarketItem>
      </MarketList>

      <MarketList style={{ margin: '100px 0 50px' }}>
        <MarketItemTitle>
          {t('markets.realEstateMarket.list2.title')}
        </MarketItemTitle>

        <MarketItem>
          {t('markets.realEstateMarket.list2.item1')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list2.item1')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list2.item1')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list2.item1')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list2.item1')}
        </MarketItem>
        <MarketItem>
          {t('markets.realEstateMarket.list2.item1')}
        </MarketItem>
      </MarketList>

      <MarketPreTitle margin="100px 0 20px" width="580px">
        {t('markets.realEstateMarket.preTitle2')}
      </MarketPreTitle>

      <MarketText margin="0 0 20px" width="580px">
        {t('markets.realEstateMarket.text')}
      </MarketText>

    </MarketWrap>
  );
};

export default RealEstateMarket;
