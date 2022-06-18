import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay } from 'swiper';
import { Container, Flex } from '../../../uikit/uikit';
import {
  AUSSC, AUSSlideImg, AUSSlideName, AUSSwiper, AUSTitle,
} from './AboutUsServicesSC';

import 'swiper/swiper.min.css';

const AboutUsServices:React.FC = () => (
  <AUSSC>
    <Container>
      <AUSTitle>
        Универсальная фондовая
        {' '}
        <br />
        биржа
        {' '}
        <span>envoys</span>
        {' '}
        - это Спектр услуг
        <br />
        для всех лиц.
      </AUSTitle>
    </Container>

    <AUSSwiper>
      <Swiper
        spaceBetween={20}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        modules={[Autoplay]}
        speed={500}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          670: {
            slidesPerView: 2,
          },
          1070: {
            slidesPerView: 3,
          },
          1420: {
            slidesPerView: 4,
          },
        }}
      >

        <SwiperSlide>
          <Flex direction="column" align="flex-start">
            <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image1.jpg')} />
            <AUSSlideName>
              Токенизированные Активы
            </AUSSlideName>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" align="flex-start">
            <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image2.jpg')} />
            <AUSSlideName>
              Криптовалюты
            </AUSSlideName>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" align="flex-start">
            <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image3.jpg')} />
            <AUSSlideName>
              Недвижимость
            </AUSSlideName>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" align="flex-start">
            <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image4.jpg')} />
            <AUSSlideName>
              Валютный рынок
            </AUSSlideName>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" align="flex-start">
            <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image5.jpg')} />
            <AUSSlideName>
              Рынок Драгоценных Металлов
            </AUSSlideName>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" align="flex-start">
            <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image6.jpg')} />
            <AUSSlideName>
              Товарный Сектор
            </AUSSlideName>
          </Flex>
        </SwiperSlide>

      </Swiper>
    </AUSSwiper>
  </AUSSC>
);

export default AboutUsServices;
