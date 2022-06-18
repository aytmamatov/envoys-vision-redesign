import React from 'react';
import { useSwiper } from 'swiper/react/swiper-react.js';
import { Flex } from '../../../uikit/uikit';
import { SCBtn, SCCircle, SCCircleActive } from './SwiperConrollerSC';

function SwiperConroller() {
  const swiper1 = useSwiper();

  return (
    <Flex align="center">
      <SCBtn onClick={() => swiper1.slidePrev()} img={false}>
        <img src={require('../../../assets/Images/aboutUs/Ach/Controlls/vector.svg').default} alt="" />
      </SCBtn>
      <Flex align="center" margin="0 8px">
        <SCCircle />
        <SCCircleActive />
        <SCCircle />
      </Flex>
      <SCBtn onClick={() => swiper1.slideNext()} img>
        <img src={require('../../../assets/Images/aboutUs/Ach/Controlls/vector.svg').default} alt="" />
      </SCBtn>

    </Flex>
  );
}

export default SwiperConroller;
