import React from 'react';
import Ariculture from '../MarketContentComponents/Ariculture/Ariculture';
import CommoditySector from '../MarketContentComponents/CommoditySector/CommoditySector';
import CryptoMarket from '../MarketContentComponents/CryptoMarket/CryptoMarket';
import CurrencyMarket from '../MarketContentComponents/CurrencyMarket/CurrencyMarket';
import EnMarket from '../MarketContentComponents/EnMarket/EnMarket';
import FinancialSector from '../MarketContentComponents/FinancialSector/FinancialSector';
import Industry from '../MarketContentComponents/Industry/Industry';
import KgMarket from '../MarketContentComponents/KgMarket/KgMarket';
import MiningSector from '../MarketContentComponents/MiningSector/MiningSector';
import PreciousMetalsMarket from '../MarketContentComponents/PreciousMetalsMarket/PreciousMetalsMarket';
import RealEstateMarket from '../MarketContentComponents/RealEstateMarket/RealEstateMarket';
import RuMarket from '../MarketContentComponents/RuMarket/RuMarket';

interface ListingContent {
    active: string;
}

const MarketContent:React.FC<ListingContent> = ({ active }) => {
  if (active === 'EnMarket') return <EnMarket />;
  if (active === 'KgMarket') return <KgMarket />;
  if (active === 'RuMarket') return <RuMarket />;

  if (active === 'miningSector') return <MiningSector />;
  if (active === 'industry') return <Industry />;
  if (active === 'financialSector') return <FinancialSector />;
  if (active === 'ariculture') return <Ariculture />;

  if (active === 'preciousMetalsMarket') return <PreciousMetalsMarket />;
  if (active === 'currencyMarket') return <CurrencyMarket />;
  if (active === 'cryptoMarket') return <CryptoMarket />;
  if (active === 'commoditySector') return <CommoditySector />;

  return <RealEstateMarket />;
};

export default MarketContent;
