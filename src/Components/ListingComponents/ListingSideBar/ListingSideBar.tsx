import React from 'react'
import { Flex } from '../../../uikit/uikit';
import { SidebarLink, SidebarSC, SidebarTitle } from './ListingSideBarSC';
import {useTranslation} from "react-i18next";

interface SidebarProps{
  active: string;
}

const ListingSideBar:React.FC<SidebarProps> = (props) => {
  const {t} = useTranslation()
  
  return (
    <SidebarSC>
      <Flex width='100%' direction='column' align='flex-start'>
        <SidebarTitle>
          {t("listing.sideBar.title")}
        </SidebarTitle>
  
        <SidebarLink 
          to='/listing?param=CompanyListing' 
          className={props.active===t("listing.sideBar.path1")?'active':''}
          >
          {t("listing.sideBar.path1")}
        </SidebarLink>
        <SidebarLink 
          to='/listing?param=Bonds'
          className={props.active===t("listing.sideBar.path2")?'active':''}
          >
          {t("listing.sideBar.path2")}
        </SidebarLink>
        <SidebarLink 
          to='/listing?param=CompanyDisclosures'
          className={props.active===t("listing.sideBar.path3")?'active':''}
        >
          {t("listing.sideBar.path3")} 
        </SidebarLink>
      </Flex>

    </SidebarSC>
  )
}

export default ListingSideBar