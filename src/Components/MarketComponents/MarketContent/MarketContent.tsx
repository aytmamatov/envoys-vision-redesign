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

const MarketContent:React.FC<ListingContent> = (props) => {
  if (props.active === 'EnMarket') return <EnMarket />;
  if (props.active === 'KgMarket') return <KgMarket />;
  if (props.active === 'RuMarket') return <RuMarket />;

  if (props.active === 'miningSector') return <MiningSector />;
  if (props.active === 'industry') return <Industry />;
  if (props.active === 'financialSector') return <FinancialSector />;
  if (props.active === 'ariculture') return <Ariculture />;

  if (props.active === 'preciousMetalsMarket') return <PreciousMetalsMarket />;
  if (props.active === 'currencyMarket') return <CurrencyMarket />;
  if (props.active === 'cryptoMarket') return <CryptoMarket />;
  if (props.active === 'commoditySector') return <CommoditySector />;

  return <RealEstateMarket />;
};

export default MarketContent;
