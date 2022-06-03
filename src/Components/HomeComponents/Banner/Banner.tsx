import axios from 'axios'
import React from 'react'
import { Button, Container } from '../../../uikit/uikit'
import { BannerImage, BannerInfo, BannerSC, BannerText, BannerTitle, BannerWrap } from './BannerSC'

const Banner:React.FC = () => {
  return (
    <BannerSC>
        <Container>
            <BannerWrap>
                <BannerInfo>
                    <BannerTitle>
                        Инвестиции в рынок <br />
                        <span>ценных бумаг</span>
                    </BannerTitle>
                    <BannerText>
                        Envoys Vision - это доступность к финансовым рынкам, безопасность инвестирования в стартапы, высокая доходность для поставщиков ликвидности
                    </BannerText>
                    <Button>
                        Подробнее
                    </Button>
                </BannerInfo>

                <BannerImage src={require('../../../Assets/Images/home/banner.png')}/>
            </BannerWrap>
        </Container>
    </BannerSC>
  )
}

export default Banner