import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from '../../../uikit/uikit';
import { SidebarLink, SidebarSC, SidebarTitle } from '../../ListingComponents/ListingSideBar/ListingSideBarSC';

interface SidebarProps{
  active: string;
}

const DisclosureSideBar:React.FC<SidebarProps> = ({ active }) => {
  const { t } = useTranslation();
  return (
    <SidebarSC>
      <Flex width="100%" direction="column" align="flex-start">
        <SidebarTitle>
          {t('disclosure.sidebar.title')}
        </SidebarTitle>

        <SidebarLink
          to="/disclosure?param=members"
          className={active === t('disclosure.sidebar.link1') ? 'active' : ''}
        >
          {t('disclosure.sidebar.link1')}
        </SidebarLink>
        <SidebarLink
          to="/disclosure?param=rules"
          className={active === t('disclosure.sidebar.link2') ? 'active' : ''}
        >
          {t('disclosure.sidebar.link2')}

        </SidebarLink>
        <SidebarLink
          to="/disclosure?param=legislationKR"
          className={active === t('disclosure.sidebar.link3') ? 'active' : ''}
        >
          {t('disclosure.sidebar.link3')}

        </SidebarLink>
        <SidebarLink
          to="/disclosure?param=disclosure"
          className={active === t('disclosure.sidebar.link4') ? 'active' : ''}
        >
          {t('disclosure.sidebar.link4')}

        </SidebarLink>
      </Flex>

    </SidebarSC>
  );
};

export default DisclosureSideBar;
