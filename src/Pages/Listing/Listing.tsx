import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import ListingContent from '../../Components/ListingComponents/ListingContent/ListingContent'
import ListingSideBar from '../../Components/ListingComponents/ListingSideBar/ListingSideBar'
import Path from '../../Components/Path/Path'
import { Container, Flex } from '../../uikit/uikit'
import {useTranslation} from "react-i18next";

const ListingWrap = styled.div`
    background: #FCFCFC;
`

const Listing:React.FC = () => {
    const {t} = useTranslation()

    const [activePath, setActivePath] = useState(String(t("listing.sideBar.path1")))

    const [searchParams] = useSearchParams()

    useEffect(() => {
        setActivePath(t("listing.sideBar.path1"))
        let path = searchParams.get('param')
        if(path){
            if(path === 'CompanyListing') setActivePath(t("listing.sideBar.path1"))
            if(path === 'Bonds') setActivePath(t("listing.sideBar.path2"))
            if(path === 'CompanyDisclosures') setActivePath(t("listing.sideBar.path3"))
        }
    }, [searchParams, t])
    

    return (
            <ListingWrap>
                <Path title={activePath}/>
                <Container>
                    <Flex width='100%' style={{background: '#FCFCFC'}}>
                        <ListingSideBar active={activePath}/>

                        <ListingContent active={activePath}/>
                    </Flex> 
                </Container>
            </ListingWrap>
    )
}

export default Listing