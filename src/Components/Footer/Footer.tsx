import React from 'react';
import { Container, Flex } from '../../uikit/uikit';
import {
  FooterNavLink, FooterNav, FooterSC, FooterTop, FooterSocialIcons, FooterBottom, FooterBottomNav, FooterBottomLink,
} from './FooterSC';

const Footer:React.FC = () => {
  const DD = require('../../assets/Images/footer/Vector.svg');
  return (
    <FooterSC>
      <Container>

        <FooterTop>
          <FooterNav>
            <FooterNavLink to="/market">
              <p>Рынки</p>
            </FooterNavLink>
            <FooterNavLink to="/news">
              <p>Новости</p>
            </FooterNavLink>
            <FooterNavLink to="/news">
              <p>Аналитика</p>
            </FooterNavLink>
            <FooterNavLink to="/listing">
              <p>Листинг</p>
            </FooterNavLink>
            <FooterNavLink to="/disclosure">
              <p>Раскрытие информации</p>
            </FooterNavLink>
            <FooterNavLink to="aboutus">
              <p>О нас</p>
            </FooterNavLink>
          </FooterNav>

          <FooterSocialIcons>
            <a href="#">
              <img src={require('../../assets/Images/footer/facebook.svg')} alt="" />
            </a>
            <a href="#">
              <img src={require('../../assets/Images/footer/twitter.svg')} alt="" />
            </a>
            <a href="#">
              <img src={require('../../assets/Images/footer/google.svg')} alt="" />
            </a>
            <a href="#">
              <img src={require('../../assets/Images/footer/in.svg')} alt="" />
            </a>
          </FooterSocialIcons>
        </FooterTop>

        <FooterBottom>
          <p>
            © 2022 Envoys Vision. All rights reserved
          </p>

          <FooterBottomNav>
            <FooterBottomLink href="#">
              Политика конфиденциальности
            </FooterBottomLink>
            <FooterBottomLink href="#">
              Правила
            </FooterBottomLink>
            <FooterBottomLink href="#">
              Помощь
            </FooterBottomLink>
          </FooterBottomNav>
        </FooterBottom>

      </Container>
    </FooterSC>
  );
};

export default Footer;
