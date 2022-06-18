import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { SidebarLink, SidebarSC, SidebarTitle } from '../../ListingComponents/ListingSideBar/ListingSideBarSC';

interface SidebarProps{
    active: string;
}

const MarketSideBar:React.FC<SidebarProps> = ({ active }) => (
  <SidebarSC>
    <Flex width="100%" direction="column" align="flex-start">
      <SidebarTitle className="marketSideBarTitle">
        ФОНДОВЫЙ РЫНОК
      </SidebarTitle>

      <SidebarLink
        to="/market?param=RuMarket"
        className={active === 'RuMarket' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Российский рынок
      </SidebarLink>
      <SidebarLink
        to="/market?param=EnMarket"
        className={active === 'EnMarket' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Американский рынок
      </SidebarLink>
      <SidebarLink
        to="/market?param=KgMarket"
        className={active === 'KgMarket' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Кыргызский рынок
      </SidebarLink>

      <SidebarTitle className="marketSideBarTitle">
        СЕКТОРА
      </SidebarTitle>

      <SidebarLink
        to="/market?param=miningSector"
        className={active === 'miningSector' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Горднодобывающий сектор
      </SidebarLink>
      <SidebarLink
        to="/market?param=industry"
        className={active === 'industry' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Промышленность
      </SidebarLink>
      <SidebarLink
        to="/market?param=financialSector"
        className={active === 'financialSector' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Финансовый сектор
      </SidebarLink>
      <SidebarLink
        to="/market?param=ariculture"
        className={active === 'ariculture' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Сельское хозяйство
      </SidebarLink>

      <SidebarTitle className="marketSideBarTitle">
        РЫНКИ
      </SidebarTitle>

      <SidebarLink
        to="/market?param=preciousMetalsMarket"
        className={active === 'CompanyListing' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Рынок драгоценных металлов
      </SidebarLink>
      <SidebarLink
        to="/market?param=currencyMarket"
        className={active === 'currencyMarket' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Валютный рынок
      </SidebarLink>
      <SidebarLink
        to="/market?param=cryptoMarket"
        className={active === 'cryptoMarket' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Криптовалютный рынок
      </SidebarLink>
      <SidebarLink
        to="/market?param=commoditySector"
        className={active === 'commoditySector' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Товарный сектор
      </SidebarLink>
      <SidebarLink
        to="/market?param=realEstateMarket"
        className={active === 'realEstateMarket' ? 'active marketSideBarLink' : 'marketSideBarLink'}
      >
        Рынок недвижимости
      </SidebarLink>
    </Flex>

  </SidebarSC>
);

export default MarketSideBar;
