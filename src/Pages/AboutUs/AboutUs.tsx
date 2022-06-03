import React from 'react'
import AboutUsAchievements from '../../Components/AboutUsComponents/AboutUsAchievements/AboutUsAchievements'
import AboutUsDirectior from '../../Components/AboutUsComponents/AboutUsDirectior/AboutUsDirectior'
import AboutUsServices from '../../Components/AboutUsComponents/AboutUsServices/AboutUsServices'
import AboutUsValues from '../../Components/AboutUsComponents/AboutUsValues/AboutUsValues'

const AboutUs:React.FC = () => {
  return (
    <>
        <AboutUsDirectior/>
        <AboutUsAchievements/>
        <AboutUsServices/>
        <AboutUsValues/>
    </>
  )
}

export default AboutUs