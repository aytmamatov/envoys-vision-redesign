import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeaderDD2, HeaderDDWrap, HeaderLinkDD, HeaderNavLink,
} from '../Header/HeaderSC';

const HeaderMarket:React.FC = () => {
  const [show, setShow] = useState(false);
  const DD = require('../../assets/Images/Header/DD.svg');
  const { t } = useTranslation();

  return (
    <HeaderNavLink
      to="/market"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {t('header.links.link1.title')}
      <img src={DD} alt="" />

      <HeaderDDWrap show={show}>
        <HeaderDD2>
          <h3>{t('header.links.link1.DDLink.DD1.title')}</h3>

          <HeaderLinkDD to="/market?param=RuMarket">{t('header.links.link1.DDLink.DD1.links.DDLink1')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=EnMarket">{t('header.links.link1.DDLink.DD1.links.DDLink2')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=KgMarket">{t('header.links.link1.DDLink.DD1.links.DDLink3')}</HeaderLinkDD>
        </HeaderDD2>

        <HeaderDD2>
          <h3>{t('header.links.link1.DDLink.DD2.title')}</h3>

          <HeaderLinkDD to="/market?param=miningSector">{t('header.links.link1.DDLink.DD2.links.DDLink1')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=industry">{t('header.links.link1.DDLink.DD2.links.DDLink1')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=financialSector">{t('header.links.link1.DDLink.DD2.links.DDLink3')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=ariculture">{t('header.links.link1.DDLink.DD2.links.DDLink4')}</HeaderLinkDD>
        </HeaderDD2>

        <HeaderDD2>
          <h3>{t('header.links.link1.DDLink.DD3.title')}</h3>

          <HeaderLinkDD to="/market?param=preciousMetalsMarket">{t('header.links.link1.DDLink.DD3.links.DDLink1')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=currencyMarket">{t('header.links.link1.DDLink.DD3.links.DDLink2')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=cryptoMarket">{t('header.links.link1.DDLink.DD3.links.DDLink3')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=commoditySector">{t('header.links.link1.DDLink.DD3.links.DDLink4')}</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=realEstateMarket">{t('header.links.link1.DDLink.DD3.links.DDLink5')}</HeaderLinkDD>
        </HeaderDD2>
      </HeaderDDWrap>

    </HeaderNavLink>
  );
};

export default HeaderMarket;
