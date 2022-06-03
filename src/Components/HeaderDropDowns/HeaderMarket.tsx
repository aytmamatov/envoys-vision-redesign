import React, { useState } from 'react'
import { HeaderDD, HeaderDD2, HeaderDDWrap, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';


const HeaderMarket:React.FC = () => {
    const [show, setShow] = useState(false)
    const DD = require('../../Assets/Images/Header/DD.svg')['default']


  return (
    <HeaderNavLink 
        to='/analitics'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        Рынки
        <img src={DD} alt="" />

        <HeaderDDWrap show={show}>
            <HeaderDD2>
                <h3>Фондовый рынок</h3>

                <HeaderLinkDD to='/analitics'>Российский рынок</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Американский рынок</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Кыргызский рынок</HeaderLinkDD>
            </HeaderDD2>

            <HeaderDD2>
                <h3>Сектора</h3>

                <HeaderLinkDD to='/analitics'>Горднодобывающий сектор</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Промышленность</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Финансовый сектор</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Сельское хозяйство</HeaderLinkDD>
            </HeaderDD2>

            <HeaderDD2>
                <h3>Рынки</h3>

                <HeaderLinkDD to='/analitics'>Рынок драгоценных металлов</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Валютный рынок</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Криптовалютный рынок</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Товарный сектор</HeaderLinkDD>
                <HeaderLinkDD to='/analitics'>Рынок недвижимости</HeaderLinkDD>
            </HeaderDD2>
        </HeaderDDWrap>

    </HeaderNavLink>
  )
}

export default HeaderMarket