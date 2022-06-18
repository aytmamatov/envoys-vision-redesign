import React, { useState } from 'react';
import {
  HeaderDD, HeaderDD2, HeaderDDWrap, HeaderLinkDD, HeaderNavLink,
} from '../Header/HeaderSC';

const HeaderMarket:React.FC = () => {
  const [show, setShow] = useState(false);
  const DD = require('../../assets/Images/Header/DD.svg').default;

  return (
    <HeaderNavLink
      to="/market"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      Рынки
      <img src={DD} alt="" />

      <HeaderDDWrap show={show}>
        <HeaderDD2>
          <h3>Фондовый рынок</h3>

          <HeaderLinkDD to="/market?param=RuMarket">Российский рынок</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=EnMarket">Американский рынок</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=KgMarket">Кыргызский рынок</HeaderLinkDD>
        </HeaderDD2>

        <HeaderDD2>
          <h3>Сектора</h3>

          <HeaderLinkDD to="/market?param=miningSector">Горднодобывающий сектор</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=industry">Промышленность</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=financialSector">Финансовый сектор</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=ariculture">Сельское хозяйство</HeaderLinkDD>
        </HeaderDD2>

        <HeaderDD2>
          <h3>Рынки</h3>

          <HeaderLinkDD to="/market?param=preciousMetalsMarket">Рынок драгоценных металлов</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=currencyMarket">Валютный рынок</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=cryptoMarket">Криптовалютный рынок</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=commoditySector">Товарный сектор</HeaderLinkDD>
          <HeaderLinkDD to="/market?param=realEstateMarket">Рынок недвижимости</HeaderLinkDD>
        </HeaderDD2>
      </HeaderDDWrap>

    </HeaderNavLink>
  );
};

export default HeaderMarket;
