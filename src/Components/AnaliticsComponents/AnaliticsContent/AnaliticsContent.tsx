import React from 'react'
import AnaliticsDC from '../AnaliticsDC/AnaliticsDC';
import AnaliticsEC from '../AnaliticsEC/AnaliticsEC';
import AnaliticsMC from '../AnaliticsMC/AnaliticsMC';
import {useTranslation} from "react-i18next";

interface Props {
    currentPage: string;
}

const AnaliticsContent:React.FC<Props> = (props) => {
    const {t} = useTranslation()

    if(props.currentPage === t("analitics.pages.p1")) return <AnaliticsDC/>
    else if(props.currentPage === t("analitics.pages.p2")) return <AnaliticsEC/>
    return <AnaliticsMC/>
}

export default AnaliticsContent