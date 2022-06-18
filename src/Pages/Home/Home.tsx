import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/HomeComponents/Banner/Banner';
import HomeReport from '../../components/HomeComponents/HomeReport/HomeReport';
import HomeNews from '../../components/HomeComponents/HomeNews/HomeNews';
import HomeInvisting from '../../components/HomeComponents/HomeInvisting/HomeInvisting';
import OurTeam from '../../components/HomeComponents/OurTeam/OurTeam';
import HomePartners from '../../components/HomeComponents/HomePartners/HomePartners';

const HomeSC = styled.div`
  background: #FCFCFC;
`;

const Home:React.FC = () => (
  <HomeSC>
    <Banner />
    <HomeReport />
    <HomeNews />
    <HomeInvisting />
    <OurTeam />
    <HomePartners />
  </HomeSC>
);

export default Home;
