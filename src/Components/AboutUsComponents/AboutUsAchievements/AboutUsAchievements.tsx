import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import { useTranslation } from 'react-i18next';
import {
  AUADate, AUAIamge, AUAInfo, AUAInfo2, AUAInfoInside, AUANum, AUASC, AUAText, AUAWrap,
} from './AboutUsAchievementsSC';
import { Container, Flex } from '../../../uikit/uikit';
import SwiperConroller from '../AchSwiperController/SwiperConroller';

const AboutUsAchievements:React.FC = () => {
  const { t } = useTranslation();
  const [swiperSlide, setSwiperSlide] = React.useState(1);

  const [ach, setAch] = React.useState([
    {
      date: t('aboutMe.ach.ach1.date'),
      text: t('aboutMe.ach.ach1.title'),
    },

    {
      date: t('aboutMe.ach.ach2.date'),
      text: t('aboutMe.ach.ach2.title'),
    },
    {
      date: t('aboutMe.ach.ach3.date'),
      text: t('aboutMe.ach.ach3.title'),
    },
  ]);

  React.useEffect(() => {
    setAch([
      {
        date: t('aboutMe.ach.ach1.date'),
        text: t('aboutMe.ach.ach1.title'),
      },
      {
        date: t('aboutMe.ach.ach2.date'),
        text: t('aboutMe.ach.ach2.title'),
      },
      {
        date: t('aboutMe.ach.ach3.date'),
        text: t('aboutMe.ach.ach3.title'),
      }]);
  }, [t]);

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
