import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import DisclosureSideBar from '../../Components/DisclosureComponents/DisclosureSidebar/DisclosureSideBar'
import DisclosureContentSide from '../../Components/DisclosureComponents/DisclosureContentSide/DisclosureContentSide'
import Path from '../../Components/Path/Path'
import { Container, Flex } from '../../uikit/uikit'
import {useTranslation} from "react-i18next";

const DisclosureWrap = styled.div`
    background: #FCFCFC;
`


const Disclosure:React.FC = () => {
    const {t} = useTranslation()

    const [activePath, setActivePath] = useState(String(t("disclosure.sidebar.link1")))

    const [searchParams] = useSearchParams()

    useEffect(() => {
        let path = searchParams.get('param')
        if(path){
            if(path==='members') setActivePath(t("disclosure.sidebar.link1"))
            if(path==='rules') setActivePath(t("disclosure.sidebar.link2"))
            if(path==='legislationKR') setActivePath(t("disclosure.sidebar.link3"))
            if(path==='disclosure') setActivePath(t("disclosure.sidebar.link4"))
        }
    }, [searchParams])




  return (
    <DisclosureWrap>
        <Path title={activePath}/>
        <Container>
            <Flex width='100%' style={{background: '#FCFCFC'}}>
                <DisclosureSideBar active={activePath}/>

                <DisclosureContentSide active={activePath}/>
            </Flex> 
        </Container>
    </DisclosureWrap>
  )
}

export default Disclosure