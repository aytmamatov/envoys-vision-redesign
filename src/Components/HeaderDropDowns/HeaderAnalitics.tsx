import React, { useState } from 'react'
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';


const HeaderAnalitics:React.FC = () => {
    const [show, setShow] = useState(false)
    const DD = require('../../Assets/Images/Header/DD.svg')['default']


  return (
    <HeaderNavLink 
        to='/analitics'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        Аналитика
        <img src={DD} alt="" />

        <HeaderDD show={show}>
            <HeaderLinkDD to='/analitics' style={{width: '160px'}}>Дивидендный календарь</HeaderLinkDD>
            <HeaderLinkDD to='/analitics'>Календарь заработка</HeaderLinkDD>
            <HeaderLinkDD to='/analitics'>Торговый календарь</HeaderLinkDD>
        </HeaderDD>
    </HeaderNavLink>
  )
}

export default HeaderAnalitics