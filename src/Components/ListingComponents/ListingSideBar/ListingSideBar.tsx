import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { SidebarLink, SidebarSC, SidebarTitle } from './ListingSideBarSC';

interface SidebarProps{
  active: string;
}

const ListingSideBar:React.FC<SidebarProps> = ({ active }) => (
  <SidebarSC>
    <Flex width="100%" direction="column" align="flex-start">
      <SidebarTitle>
        листинг
      </SidebarTitle>

      <SidebarLink
        to="/listing?param=CompanyListing"
        className={active === 'Список компаний' ? 'active' : ''}
      >
        Список компаний
      </SidebarLink>
      <SidebarLink
        to="/listing?param=Bonds"
        className={active === 'Облигации' ? 'active' : ''}
      >
        Облигации
      </SidebarLink>
      <SidebarLink
        to="/listing?param=CompanyDisclosures"
        className={active === 'Раскрытия информации компании' ? 'active' : ''}
      >
        Раскрытия информации компании
      </SidebarLink>
    </Flex>

  </SidebarSC>
);

export default ListingSideBar;
