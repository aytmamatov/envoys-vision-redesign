import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Flex } from '../../../uikit/uikit';
import {
  AUD, AUDDirectiorTitle, AUDDirector, AUDDirectorIconWrap,
  AUDDirectorImage, AUDDirectorInfo, AUDDirectorText,
  AUDInfo, AUDInfoText, AUDInfoTitle, AUDWrap,
} from './AboutUsDirectiorSC';

const AboutUsDirectior:React.FC = () => {
  const { t } = useTranslation();
  return (
    <AUD>
      <Container>
        <AUDWrap>
          <AUDInfo>
            <AUDInfoTitle>
              {t('aboutMe.admin.title')}
              {' '}
              <br />
              <span>
                {t('aboutMe.admin.title2')}
              </span>
            </AUDInfoTitle>

            <AUDInfoText>
              {t('aboutMe.admin.text')}
            </AUDInfoText>
          </AUDInfo>

          <AUDDirector>
            <AUDDirectorInfo>
              <AUDDirectorImage src={require('../../../assets/Images/aboutUs/Director.jpg')} />
              <AUDDirectiorTitle>
                {t('aboutMe.admin.imageTitle')}
              </AUDDirectiorTitle>
              <AUDDirectorText>
                {t('aboutMe.admin.imageText')}
              </AUDDirectorText>
              <Flex>
                <AUDDirectorIconWrap href="#">
                  <img src={require('../../../assets/Images/aboutUs/icons/Vector.svg').default} alt="" />
                </AUDDirectorIconWrap>
                <AUDDirectorIconWrap href="#">
                  <img src={require('../../../assets/Images/aboutUs/icons/Vector-1.svg').default} alt="" />
                </AUDDirectorIconWrap>
                <AUDDirectorIconWrap href="#">
                  <img src={require('../../../assets/Images/aboutUs/icons/Vector-2.svg').default} alt="" />
                </AUDDirectorIconWrap>
              </Flex>
            </AUDDirectorInfo>
          </AUDDirector>
        </AUDWrap>
      </Container>
    </AUD>
  );
};

export default AboutUsDirectior;
