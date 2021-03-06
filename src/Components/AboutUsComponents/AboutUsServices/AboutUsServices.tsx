import React from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay } from 'swiper';
import {
  AUSSC, AUSSlideImg, AUSSlideName, AUSSwiper, AUSTitle,
} from './AboutUsServicesSC';
import { Container, Flex } from '../../../uikit/uikit';
import 'swiper/swiper.min.css';

const AboutUsServices:React.FC = () => {
  const { t } = useTranslation();

  return (
    <AUSSC>
      <Container>
        <AUSTitle>
          {t('aboutMe.services.title1')}
          <span>{t('aboutMe.services.title2')}</span>
          {t('aboutMe.services.title3')}
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
              <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image1.jpg').default} />
              <AUSSlideName>
                {t('aboutMe.services.list.item1')}
              </AUSSlideName>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex direction="column" align="flex-start">
              <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image2.jpg').default} />
              <AUSSlideName>
                {t('aboutMe.services.list.item2')}
              </AUSSlideName>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex direction="column" align="flex-start">
              <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image3.jpg').default} />
              <AUSSlideName>
                {t('aboutMe.services.list.item3')}
              </AUSSlideName>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex direction="column" align="flex-start">
              <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image4.jpg').default} />
              <AUSSlideName>
                {t('aboutMe.services.list.item4')}
              </AUSSlideName>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex direction="column" align="flex-start">
              <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image5.jpg').default} />
              <AUSSlideName>
                {t('aboutMe.services.list.item5')}
              </AUSSlideName>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex direction="column" align="flex-start">
              <AUSSlideImg src={require('../../../assets/Images/aboutUs/services/image6.jpg').default} />
              <AUSSlideName>
                {t('aboutMe.services.list.item6')}
              </AUSSlideName>
            </Flex>
          </SwiperSlide>

        </Swiper>
      </AUSSwiper>
    </AUSSC>
  );
};

export default AboutUsServices;
