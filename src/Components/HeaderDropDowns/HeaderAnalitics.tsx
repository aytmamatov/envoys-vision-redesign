import React, { useState } from 'react'
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';
import {useTranslation} from "react-i18next";

const HeaderAnalitics:React.FC = () => {
    const [show, setShow] = useState(false)
    const DD = require('../../Assets/Images/Header/DD.svg')['default']
    const {t} = useTranslation()

  return (
    <HeaderNavLink 
        to='/analitics'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
    >
        {t("header.links.link3.title")}
        <img src={DD} alt="" />

        <HeaderDD show={show}>
            <HeaderLinkDD to='/analitics?param=dividendC' style={{width: '160px'}}>{t("header.links.link3.links.DDLink1")}</HeaderLinkDD>
            <HeaderLinkDD to='/analitics?param=earningC'>{t("header.links.link3.links.DDLink2")}</HeaderLinkDD>
            <HeaderLinkDD to='/analitics?param=marketC'>{t("header.links.link3.links.DDLink3")}</HeaderLinkDD>
        </HeaderDD>
    </HeaderNavLink>
  )
}

export default HeaderAnalitics