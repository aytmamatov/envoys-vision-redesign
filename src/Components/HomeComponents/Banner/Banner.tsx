import axios from 'axios'
import React from 'react'
import { Button, Container } from '../../../uikit/uikit'
import { BannerImage, BannerInfo, BannerSC, BannerText, BannerTitle, BannerWrap } from './BannerSC'
import {useTranslation} from "react-i18next";

const Banner:React.FC = () => {
    const {t} = useTranslation()

  return (
    <BannerSC>
        <Container>
            <BannerWrap>
                <BannerInfo>
                    <BannerTitle>
                    {t("home.Banner.titles.title")} <br />
                        <span>{t("home.Banner.titles.title2")}</span>
                    </BannerTitle>
                    <BannerText>
                        {t("home.Banner.text")}
                    </BannerText>
                    <Button>
                        {t("home.Banner.btn")}
                    </Button>
                </BannerInfo>

                <BannerImage src={require('../../../Assets/Images/home/banner.png')}/>
            </BannerWrap>
        </Container>
    </BannerSC>
  )
}

export default Banner