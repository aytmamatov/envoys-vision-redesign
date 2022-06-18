import React, { useState } from 'react'
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';
import {useTranslation} from "react-i18next";


const HeaderListing:React.FC = () => {
    const [show, setShow] = useState(false)
    const DD = require('../../Assets/Images/Header/DD.svg')['default']
    const {t} = useTranslation()


  return (
    <HeaderNavLink 
        to='/listing'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        {t("header.links.link4.title")}
        <img src={DD} alt="" />

        <HeaderDD show={show}>
            <HeaderLinkDD to='/listing?param=CompanyListing'>{t("header.links.link4.links.DDLink1")}</HeaderLinkDD>
            <HeaderLinkDD to='/listing?param=Bonds'>{t("header.links.link4.links.DDLink2")}</HeaderLinkDD>
            <HeaderLinkDD to='/listing?param=CompanyDisclosures'>{t("header.links.link4.links.DDLink3")}</HeaderLinkDD>
            <HeaderLinkDD to='/disclosure?param=rules&header=listing'>{t("header.links.link4.links.DDLink4")}</HeaderLinkDD>
        </HeaderDD>
    </HeaderNavLink>
  )
}

export default HeaderListing