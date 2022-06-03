import React, { useState } from 'react'
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';


const HeaderDisclosure:React.FC = () => {
    const [show, setShow] = useState(false)
    const DD = require('../../Assets/Images/Header/DD.svg')['default']


  return (
    <HeaderNavLink 
        to='/disclosure'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        Раскрытие информации

        <img src={DD} alt="" />

        <HeaderDD show={show}>
            <HeaderLinkDD to='/disclosure'>Участники</HeaderLinkDD>
            <HeaderLinkDD to='/disclosure'>Правила</HeaderLinkDD>
            <HeaderLinkDD to='/disclosure'>Законодательство КР</HeaderLinkDD>
            <HeaderLinkDD to='/disclosure'>Раскрытия информации</HeaderLinkDD>
        </HeaderDD>
    </HeaderNavLink>
  )
}

export default HeaderDisclosure