import React from 'react';
import AboutUsAchievements from '../../components/AboutUsComponents/AboutUsAchievements/AboutUsAchievements';
import AboutUsDirectior from '../../components/AboutUsComponents/AboutUsDirectior/AboutUsDirectior';
import AboutUsServices from '../../components/AboutUsComponents/AboutUsServices/AboutUsServices';
import AboutUsValues from '../../components/AboutUsComponents/AboutUsValues/AboutUsValues';

const AboutUs:React.FC = () => (
  <>
    <AboutUsDirectior />
    <AboutUsAchievements />
    <AboutUsServices />
    <AboutUsValues />
  </>
);

export default AboutUs;
