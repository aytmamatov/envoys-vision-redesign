import React from 'react'
import AnaliticsList from '../AnaliticsList/AnaliticsList'
import AnaliticsSearchHeader from '../AnaliticsSearchHeader/AnaliticsSearchHeader'
import {useTranslation} from "react-i18next";

const AnaliticsDC:React.FC = () => {
    const {t} = useTranslation()

    const [info, setInfo] = React.useState({
        header: [
            t("analitics.dAnalitics.H1"),
            t("analitics.dAnalitics.H2"),
            t("analitics.dAnalitics.H3"),
            t("analitics.dAnalitics.H4"),
            t("analitics.dAnalitics.H5"),
            t("analitics.dAnalitics.H6"),
            t("analitics.dAnalitics.H7")
        ],
        list: [
            // ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
            // ['NXPI', 'HighPeak Energy, dsa.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
            // ['NXPI', 'HighPeak Energy, bekas.', '02/01/2022', '02/01/2022',  '0.025', '0.1', '01/11/2022'],
            // ['NXPI', 'HighPeak Energy, lsd.', '02/01/2022', '02/01/2022',  '0.025', '0.1', '01/11/2022'],
            // ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
            // ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
        ]
    })

    React.useEffect(() => {
        setInfo(val => val)
    }, [t])
    

  return (
    <>
        <AnaliticsSearchHeader/>

        <AnaliticsList list={info.list} header={info.header} earning={false}/>
    </>
  )
}

export default AnaliticsDC