import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks } from '../../Header/HeaderSC'
import { ASSC } from '../../ListingComponents/AdaptiveSidebar/AdaptiveSidebarSC'
import { LLBurger } from '../../ListingComponents/ListingContent/ListingListSC'
import {useTranslation} from "react-i18next";

const AnaliticsAdaptiveSidebar:React.FC = () => {
    const [show, setShow] = React.useState(false)
    const {t} = useTranslation()

  return (
    <>
        <LLBurger
            className='analitics'
            onClick={(() => setShow(true))} 
            src={require('../../../Assets/Images/Header/burger.svg')['default']}/>
        
            <ASSC show={show}>
                <Flex justify='space-between' align='flex-start' width='100%'>
                    <HeaderDDAdaptiveLinks>
                        <HeaderDDAdaptiveLink
                            to='/analitics?param=dividendC'
                            onClick={(() => setShow(false))} 
                        >{t("analitics.pages.p1")}</HeaderDDAdaptiveLink>
                        
                        <HeaderDDAdaptiveLink 
                            to='/analitics?param=earningC'
                            onClick={(() => setShow(false))} 
                        >{t("analitics.pages.p2")}</HeaderDDAdaptiveLink>

                        <HeaderDDAdaptiveLink 
                            to='/analitics?param=marketC'
                            onClick={(() => setShow(false))} 
                        >{t("analitics.pages.p3")}</HeaderDDAdaptiveLink>
                    </HeaderDDAdaptiveLinks>
                    
                    <LLBurger
                        className='analitics'
                        onClick={(() => setShow(false))} 
                        src={require('../../../Assets/Images/Header/burgerClose.svg')['default']}/>
                </Flex>
        </ASSC>
    </>
  )
}

export default AnaliticsAdaptiveSidebar