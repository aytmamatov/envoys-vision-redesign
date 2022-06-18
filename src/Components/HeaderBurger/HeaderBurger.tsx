import React, { useState } from 'react';
import { Flex } from '../../uikit/uikit';
import {
  HeaderAdaptive, HeaderBurgerImage, HeaderDDAdaptive, HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks, HeaderDDAdaptiveSide,
} from '../Header/HeaderSC';
import HeaderLang from '../HeaderDropDowns/HeaderLang';

const HeaderBurger:React.FC = () => {
  const [show, setShow] = useState(false);
  const [showLang, setShowLang] = useState(true);

  const Burger = require('../../assets/Images/Header/burger.svg').default;
  const BurgerClose = require('../../assets/Images/Header/burgerClose.svg').default;

  return (
    <HeaderAdaptive
      onClick={(e) => {
        e.stopPropagation();
        setShowLang(false);
      }}
    >
      <HeaderBurgerImage src={show ? BurgerClose : Burger} onClick={() => setShow((el) => !el)} />

      <HeaderDDAdaptive show={show}>
        <Flex align="flex-start" justify="space-between" width="100%">
          <HeaderDDAdaptiveLinks>
            <HeaderDDAdaptiveLink onClick={() => setShow(false)} to="/market">Рынки</HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink onClick={() => setShow(false)} to="/news">Новости</HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink onClick={() => setShow(false)} to="/analitics">Аналитика</HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink onClick={() => setShow(false)} to="/listing">Листинг</HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink onClick={() => setShow(false)} to="/disclosure">Раскрытие Информации</HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink onClick={() => setShow(false)} to="/aboutUs">О нас</HeaderDDAdaptiveLink>
          </HeaderDDAdaptiveLinks>

          <HeaderDDAdaptiveSide>
            <HeaderLang burgerShow={showLang} burgerSetShow={setShowLang} adaptiveShow />

            <a href="#" target="_blank">
              <img src={require('../../assets/Images/footer/facebook.svg').default} alt="" />
            </a>

            <a href="#" target="_blank">
              <img src={require('../../assets/Images/footer/twitter.svg').default} alt="" />
            </a>

            <a href="#" target="_blank">
              <img src={require('../../assets/Images/footer/google.svg').default} alt="" />
            </a>

            <a href="#" target="_blank">
              <img src={require('../../assets/Images/footer/in.svg').default} alt="" />
            </a>

          </HeaderDDAdaptiveSide>
        </Flex>
      </HeaderDDAdaptive>
    </HeaderAdaptive>
  );
};

export default HeaderBurger;
