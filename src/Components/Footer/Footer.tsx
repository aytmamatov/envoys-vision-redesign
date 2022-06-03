import React from 'react'
import { Container, Flex } from '../../uikit/uikit'
import { FooterNavLink, FooterNav, FooterSC, FooterTop, FooterSocialIcons, FooterBottom, FooterBottomNav, FooterBottomLink } from './FooterSC'

const Footer:React.FC = () => {
  const DD = require('../../Assets/Images/footer/Vector.svg')['default']
  return (
    <FooterSC>
      <Container>

        <FooterTop>
          <FooterNav>
            <FooterNavLink to='/markets'>
              <p>Рынки</p>
              <img src={DD} alt="" />
            </FooterNavLink>
            <FooterNavLink to='/listing'>
              <p>Листинг</p>
              <img src={DD} alt="" />
            </FooterNavLink>
            <FooterNavLink to='#'>
              <p>Новости и Аналитика</p>
              <img src={DD} alt="" />
            </FooterNavLink>
            <FooterNavLink to='#'>
              <p>Раскрытие информации</p>
              <img src={DD} alt="" />
            </FooterNavLink>
            <FooterNavLink to='aboutus'>
              <p>О нас</p>
            </FooterNavLink>
          </FooterNav>

          <FooterSocialIcons>
            <a href="#">
              <img src={require('../../Assets/Images/footer/facebook.svg')['default']} alt="" />
            </a>
            <a href="#">
              <img src={require('../../Assets/Images/footer/twitter.svg')['default']} alt="" />
            </a>
            <a href="#">
              <img src={require('../../Assets/Images/footer/google.svg')['default']} alt="" />
            </a>
            <a href="#">
              <img src={require('../../Assets/Images/footer/in.svg')['default']} alt="" />
            </a>
          </FooterSocialIcons>
        </FooterTop>

        <FooterBottom>
          <p>
            © 2022 Envoys Vision. All rights reserved
          </p>

          <FooterBottomNav>
            <FooterBottomLink href='#'>
              Политика конфиденциальности
            </FooterBottomLink>
            <FooterBottomLink href='#'>
              Правила
            </FooterBottomLink>
            <FooterBottomLink href='#'>
              Помощь
            </FooterBottomLink>
          </FooterBottomNav>
        </FooterBottom>

      </Container>
    </FooterSC>
  )
}

export default Footer