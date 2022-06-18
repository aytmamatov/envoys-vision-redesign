import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { SidebarLink, SidebarSC, SidebarTitle } from '../../ListingComponents/ListingSideBar/ListingSideBarSC';

interface SidebarProps{
  active: string;
}

const DisclosureSideBar:React.FC<SidebarProps> = (props) => (
  <SidebarSC>
    <Flex width="100%" direction="column" align="flex-start">
      <SidebarTitle>
        Раскрытие Информации
      </SidebarTitle>

      <SidebarLink
        to="/disclosure?param=members"
        className={props.active === 'Участники' ? 'active' : ''}
      >
        Участники
      </SidebarLink>
      <SidebarLink
        to="/disclosure?param=rules"
        className={props.active === 'Правила' ? 'active' : ''}
      >
        Правила
      </SidebarLink>
      <SidebarLink
        to="/disclosure?param=legislationKR"
        className={props.active === 'Законодательство КР' ? 'active' : ''}
      >
        Законодательство КР
      </SidebarLink>
      <SidebarLink
        to="/disclosure?param=disclosure"
        className={props.active === 'Раскрытия информации' ? 'active' : ''}
      >
        Раскрытия информации
      </SidebarLink>
    </Flex>

  </SidebarSC>
);

export default DisclosureSideBar;
