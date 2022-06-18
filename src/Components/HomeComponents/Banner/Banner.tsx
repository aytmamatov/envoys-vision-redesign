import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container } from '../../../uikit/uikit';
import {
  BannerImage, BannerInfo, BannerSC, BannerText, BannerTitle, BannerWrap,
} from './BannerSC';

const Banner:React.FC = () => {
  const { t } = useTranslation();

  return (
    <BannerSC>
      <Container>
        <BannerWrap>
          <BannerInfo>
            <BannerTitle>
              {t('home.Banner.titles.title')}
              {' '}
              <br />
              <span>{t('home.Banner.titles.title2')}</span>
            </BannerTitle>
            <BannerText>
              {t('home.Banner.text')}
            </BannerText>
            <Button>
              {t('home.Banner.btn')}
            </Button>
          </BannerInfo>

          <BannerImage src={require('../../../assets/Images/home/banner.png').default} />
        </BannerWrap>
      </Container>
    </BannerSC>
  );
};

export default Banner;
