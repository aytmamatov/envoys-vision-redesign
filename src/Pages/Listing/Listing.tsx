import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import ListingContent from '../../Components/ListingComponents/ListingContent/ListingContent'
import ListingSideBar from '../../Components/ListingComponents/ListingSideBar/ListingSideBar'
import Path from '../../Components/Path/Path'
import { Container, Flex } from '../../uikit/uikit'

interface Props {
    children: any
}

const ListingWrap = styled.div`
    background: #FCFCFC;
`

const Listing:React.FC = () => {
    const [activePath, setActivePath] = useState('Список компаний')

    const [searchParams] = useSearchParams()

    useEffect(() => {
        let path = searchParams.get('param')
        if(path){
            if(path==='CompanyListing') setActivePath('Список компаний')
            if(path==='Bonds') setActivePath('Облигации')
            if(path==='CompanyDisclosures') setActivePath('Раскрытия информации компании')
        }
    }, [searchParams])
    

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