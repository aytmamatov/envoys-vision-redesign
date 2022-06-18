import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../uikit/uikit';
import HeaderBurger from '../HeaderBurger/HeaderBurger';
import HeaderAnalitics from '../HeaderDropDowns/HeaderAnalitics';
import HeaderDisclosure from '../HeaderDropDowns/HeaderDisclosure';
import HeaderLang from '../HeaderDropDowns/HeaderLang';
import HeaderListing from '../HeaderDropDowns/HeaderListing';
import HeaderMarket from '../HeaderDropDowns/HeaderMarket';
import {
  HeaderLogo, HeaderNav, HeaderNavLink, HeaderSC, HeaderWrap,
} from './HeaderSC';

type Props = {
    burgerShow: boolean;
    burgerSetShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header:React.FC<Props> = ({ burgerShow, burgerSetShow }) => {
  const Logo = require('../../assets/Images/logo.svg');
  const { t } = useTranslation();

  return (
    <HeaderSC>
      <Container>
        <HeaderWrap>
          <HeaderLogo to="/">
            <img src={Logo} alt="" />
          </HeaderLogo>

          <HeaderNav>
            <HeaderMarket />

            <HeaderNavLink to="/news">{t('header.links.link2.title')}</HeaderNavLink>

            <HeaderAnalitics />

            <HeaderListing />

            <HeaderDisclosure />

            <HeaderNavLink to="/aboutus">{t('header.links.link7.title')}</HeaderNavLink>
          </HeaderNav>

          <HeaderLang burgerShow={burgerShow} burgerSetShow={burgerSetShow} adaptiveShow={false} />

          <HeaderBurger />
        </HeaderWrap>
      </Container>
    </HeaderSC>
  );
};

export default Header;
