import React from 'react'
import { Flex } from '../../../uikit/uikit';
import { SidebarLink, SidebarSC, SidebarTitle } from '../../ListingComponents/ListingSideBar/ListingSideBarSC';
import {useTranslation} from "react-i18next";

interface SidebarProps{
    active: string;
}

const MarketSideBar:React.FC<SidebarProps> = (props) => {
    const {t} = useTranslation()
    return (
    <SidebarSC>
      <Flex width='100%' direction='column' align='flex-start'>
        <SidebarTitle className='marketSideBarTitle'>
          {t("markets.sidebar.titles.title1")}
        </SidebarTitle>
  
        <SidebarLink
          to='/market?param=RuMarket' 
          className={props.active==='RuMarket'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link1")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=EnMarket'
          className={props.active==='EnMarket'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link2")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=KgMarket'
          className={props.active==='KgMarket'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link3")}
        </SidebarLink>

        <SidebarTitle className='marketSideBarTitle'>
          {t("markets.sidebar.titles.title2")}
        </SidebarTitle>
  
        <SidebarLink
          to='/market?param=miningSector' 
          className={props.active==='miningSector'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link4")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=industry'
          className={props.active==='industry'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link5")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=financialSector'
          className={props.active==='financialSector'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link6")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=ariculture'
          className={props.active==='ariculture'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link7")}
        </SidebarLink>

        
        <SidebarTitle className='marketSideBarTitle'>
          {t("markets.sidebar.titles.title3")}
        </SidebarTitle>
  
        <SidebarLink
          to='/market?param=preciousMetalsMarket' 
          className={props.active==='CompanyListing'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link8")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=currencyMarket'
          className={props.active==='currencyMarket'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link9")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=cryptoMarket'
          className={props.active==='cryptoMarket'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link10")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=commoditySector'
          className={props.active==='commoditySector'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link11")}
        </SidebarLink>
        <SidebarLink 
          to='/market?param=realEstateMarket'
          className={props.active==='realEstateMarket'?'active marketSideBarLink':'marketSideBarLink'}
          >
          {t("markets.sidebar.links.link12")}
        </SidebarLink>
      </Flex>

    </SidebarSC>
  )
}

export default MarketSideBar