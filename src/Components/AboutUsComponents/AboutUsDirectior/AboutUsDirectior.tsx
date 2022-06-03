import React from 'react'
import { Container, Flex } from '../../../uikit/uikit'
import { AUD, AUDDirectiorTitle, AUDDirector, AUDDirectorIconWrap, AUDDirectorImage, AUDDirectorInfo, AUDDirectorText, AUDInfo, AUDInfoText, AUDInfoTitle, AUDWrap } from './AboutUsDirectiorSC'

const AboutUsDirectior:React.FC = () => {
  return (
    <AUD>
        <Container>
            <AUDWrap>
                <AUDInfo>
                    <AUDInfoTitle>
                        КОМПАНИЯ ОАО <br />
                        <span>
                            Envoys vision digital exchange
                        </span>
                    </AUDInfoTitle>

                    <AUDInfoText>
                        Универсальная фондовая биржа ЕВДЭ - это команда специалистов с более чем восьмилетним опытом работы в сфере рынка ценных бумаг. 
                    </AUDInfoText>
                </AUDInfo>

                <AUDDirector>
                    <AUDDirectorInfo>
                        <AUDDirectorImage src={require('../../../Assets/Images/aboutUs/Director.jpg')}/>
                        <AUDDirectiorTitle>
                            Алмазбек Шабданов
                        </AUDDirectiorTitle>
                        <AUDDirectorText>
                            Председатель правления универсальной цифровой биржи
                        </AUDDirectorText>
                        <Flex>
                            <AUDDirectorIconWrap href='#'>
                                <img src={require('../../../Assets/Images/aboutUs/icons/Vector.svg')['default']} alt="" />
                            </AUDDirectorIconWrap>
                            <AUDDirectorIconWrap href='#'>
                                <img src={require('../../../Assets/Images/aboutUs/icons/Vector-1.svg')['default']} alt="" />
                            </AUDDirectorIconWrap>
                            <AUDDirectorIconWrap href='#'>
                                <img src={require('../../../Assets/Images/aboutUs/icons/Vector-2.svg')['default']} alt="" />
                            </AUDDirectorIconWrap>
                        </Flex>
                    </AUDDirectorInfo>
                </AUDDirector>
            </AUDWrap>
        </Container>
    </AUD>
  )
}

export default AboutUsDirectior