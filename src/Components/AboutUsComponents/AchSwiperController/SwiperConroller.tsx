import React from 'react'
import { useSwiper } from 'swiper/react';
import { Flex } from '../../../uikit/uikit';
import { SCBtn, SCCircle, SCCircleActive } from './SwiperConrollerSC';

function SwiperConroller() {
  const swiper1 = useSwiper();

  return (
    <Flex align='center'>
      <SCBtn onClick={() => swiper1.slidePrev()} img={false}>
        <img src={require('../../../Assets/Images/aboutUs/Ach/Controlls/vector.svg')['default']} alt="" />
      </SCBtn>
      <Flex align='center' margin='0 8px'>
        <SCCircle></SCCircle>
        <SCCircleActive></SCCircleActive>
        <SCCircle></SCCircle>
      </Flex>
      <SCBtn onClick={() => swiper1.slideNext()} img={true}>
        <img src={require('../../../Assets/Images/aboutUs/Ach/Controlls/vector.svg')['default']} alt="" />
      </SCBtn>

    </Flex> 
  )
}

export default SwiperConroller