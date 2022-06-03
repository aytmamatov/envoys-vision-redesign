import React from 'react'
import Banner from '../../Components/HomeComponents/Banner/Banner'
import HomeReport from '../../Components/HomeComponents/HomeReport/HomeReport'
import styled from 'styled-components'
import HomeNews from '../../Components/HomeComponents/HomeNews/HomeNews'
import HomeInvisting from '../../Components/HomeComponents/HomeInvisting/HomeInvisting'
import OurTeam from '../../Components/HomeComponents/OurTeam/OurTeam'
import HomeDocs from '../../Components/HomeComponents/HomeDocs/HomeDocs'
import HomePartners from '../../Components/HomeComponents/HomePartners/HomePartners'

const HomeSC = styled.div`
  background: #FCFCFC;
`

const Home:React.FC = () => {
  return (
    <HomeSC>
      <Banner/>
      <HomeReport/>
      <HomeNews/>
      <HomeInvisting/>
      <OurTeam/>
      {/* <HomeDocs/> */}
      <HomePartners/>
    </HomeSC>
  )
}

export default Home