import React, { useState } from 'react'
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';


const HeaderListing:React.FC = () => {
    const [show, setShow] = useState(false)
    const DD = require('../../Assets/Images/Header/DD.svg')['default']


  return (
    <HeaderNavLink 
        to='/listing'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        Листинг
        <img src={DD} alt="" />

        <HeaderDD show={show}>
            <HeaderLinkDD to='/listing?param=CompanyListing'>Список компаний</HeaderLinkDD>
            <HeaderLinkDD to='/listing?param=Bonds'>Облигации</HeaderLinkDD>
            <HeaderLinkDD to='/listing?param=CompanyDisclosures'>Раскрытие информации компаниями</HeaderLinkDD>
            <HeaderLinkDD to='/disclosure?param=rules&header=listing'>Правила листинга</HeaderLinkDD>
        </HeaderDD>
    </HeaderNavLink>
  )
}

export default HeaderListing