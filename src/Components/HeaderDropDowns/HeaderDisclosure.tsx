import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';

const HeaderDisclosure:React.FC = () => {
  const [show, setShow] = useState(false);
  const DD = require('../../assets/Images/Header/DD.svg');
  const { t } = useTranslation();

  return (
    <HeaderNavLink
      to="/disclosure"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {t('header.links.link6.title')}

      <img src={DD} alt="" />

      <HeaderDD show={show}>
        <HeaderLinkDD to="/disclosure?param=members">{t('header.links.link6.links.DDLink1')}</HeaderLinkDD>
        <HeaderLinkDD to="/disclosure?param=rules">{t('header.links.link6.links.DDLink2')}</HeaderLinkDD>
        <HeaderLinkDD to="/disclosure?param=legislationKR">{t('header.links.link6.links.DDLink3')}</HeaderLinkDD>
        <HeaderLinkDD to="/disclosure?param=disclosure">{t('header.links.link6.links.DDLink4')}</HeaderLinkDD>
      </HeaderDD>
    </HeaderNavLink>
  );
};

export default HeaderDisclosure;
