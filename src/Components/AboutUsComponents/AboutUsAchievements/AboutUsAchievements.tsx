import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import {
  AUADate, AUAIamge, AUAInfo, AUAInfo2, AUAInfoInside, AUANum, AUASC, AUAText, AUAWrap,
} from './AboutUsAchievementsSC';
import { Container, Flex } from '../../../uikit/uikit';
import SwiperConroller from '../AchSwiperController/SwiperConroller';

const AboutUsAchievements:React.FC = () => {
  const [swiperSlide, setSwiperSlide] = React.useState(1);
  const [ach] = React.useState([
    {
      date: '2021',
      text: 'Получение лицензий на депозитарную деятельность и организатора торгов на рынке ценных бумаг',
    },

    {
      date: '2021',
      text: 'Сентябрь 2021 г. - запуск и проведение тестирования биржевой платформы',
    },

    {
      date: '2021',
      text: 'Государственная регистрация',
    },
  ]);

  function SwiperChange(swiper:any) {
    setSwiperSlide(swiper.realIndex + 1);
  }

  return (
    <AUASC>
      <Container>

        <AUAWrap>
          <AUAInfo>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              speed={500}
              onSlideChange={(swiper) => SwiperChange(swiper)}
            >
              {ach.map((el, index) => (
                <SwiperSlide key={index}>
                  <AUAInfoInside>
                    <Flex justify="space-between" align="flex-start">
                      <AUADate>{el.date}</AUADate>
                      <AUANum>{swiperSlide}</AUANum>
                    </Flex>

                    <AUAText>
                      {el.text}
                    </AUAText>
                    <SwiperConroller />
                  </AUAInfoInside>
                </SwiperSlide>
              ))}
            </Swiper>

          </AUAInfo>

          <AUAInfo2 />

          <AUAIamge src={require('../../../assets/Images/aboutUs/Ach/image1.jpg').default} />
        </AUAWrap>
      </Container>
    </AUASC>
  );
};

export default AboutUsAchievements;
