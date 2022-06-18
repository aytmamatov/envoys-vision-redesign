import React from 'react'
import { Container } from '../../../uikit/uikit'
import { AUVItem, AUVList, AUVSC, AUVTitle } from './AboutUsValuesSC'
import {useTranslation} from "react-i18next";

const AboutUsValues:React.FC = () => {
    const {t} = useTranslation()

  return (
    <AUVSC>
        <Container>
            <AUVTitle>
                {t("aboutMe.values.title")}
            </AUVTitle>

            <AUVList>

                <AUVItem>
                    <h1 className="title">
                        {t("aboutMe.values.list.item1.title")}
                    </h1>

                    <p className="text">
                        {t("aboutMe.values.list.item1.text1")}
                    </p>
                    <p className="text">
                        {t("aboutMe.values.list.item1.text2")}
                    </p>
                    <p className="text mn-none">
                        {t("aboutMe.values.list.item1.text3")}
                    </p>
                </AUVItem>

                <AUVItem>
                    <h1 className="title">
                        {t("aboutMe.values.list.item2.title")}
                    </h1>

                    <p className="text">
                        {t("aboutMe.values.list.item2.text1")}
                    </p>
                    <p className="text">
                        {t("aboutMe.values.list.item2.text2")}
                    </p>
                    <p className="text mn-none">
                        {t("aboutMe.values.list.item2.text3")}
                    </p>
                </AUVItem>

                <AUVItem>
                    <h1 className="title">
                        {t("aboutMe.values.list.item3.title")}
                    </h1>

                    <p className="text">
                        {t("aboutMe.values.list.item3.text1")}
                    </p>
                    <p className="text">
                        {t("aboutMe.values.list.item3.text2")}
                    </p>
                    <p className="text mn-none">
                        {t("aboutMe.values.list.item3.text3")}
                    </p>
                </AUVItem>
            </AUVList>
        </Container>
    </AUVSC>
  )
}

export default AboutUsValues