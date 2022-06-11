import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import MarketContent from '../../Components/MarketComponents/MarketContent/MarketContent'
import MarketSideBar from '../../Components/MarketComponents/MarketSideBar/MarketSideBar'
import { Container, Flex } from '../../uikit/uikit'

const MarketWrap = styled.div`
    background: #FCFCFC;
`

const Market:React.FC = () => {
    const [activePath, setActivePath] = React.useState('RuMarket')

    const [searchParams] = useSearchParams()

    React.useEffect(() => {
        let path = searchParams.get('param')
        if(path){
          setActivePath(path)
        }
    }, [searchParams])


  return (
    <MarketWrap>
      <Container>
        <Flex width='100%' style={{background: '#FCFCFC'}}>
            <MarketSideBar active={activePath}/>
            <MarketContent active={activePath}/>
        </Flex> 
      </Container>
    </MarketWrap>
  )
}

export default Market