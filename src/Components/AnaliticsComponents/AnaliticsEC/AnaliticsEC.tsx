import React from 'react'
import AnaliticsList from '../AnaliticsList/AnaliticsList'
import AnaliticsSearchHeader from '../AnaliticsSearchHeader/AnaliticsSearchHeader'
import {useTranslation} from "react-i18next";

const AnaliticsEC:React.FC = () => {
  const {t} = useTranslation()

  const [info, setInfo] = React.useState({
    header: [
      t("analitics.eAnalitics.H1"),
      t("analitics.eAnalitics.H2"),
      t("analitics.eAnalitics.H3"),
      t("analitics.eAnalitics.H4"),
      t("analitics.eAnalitics.H5"),
      t("analitics.eAnalitics.H6"),
      t("analitics.eAnalitics.H7"),
      t("analitics.eAnalitics.H8"),
      t("analitics.eAnalitics.H9"),
    ],
    list: [
        // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],
        // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],
        // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],
        // ['sun', 'NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43',],

        
      ]
})

return (
<>
    <AnaliticsSearchHeader/>

    <AnaliticsList list={info.list} header={info.header} earning={true}/>
</>
)
}

export default AnaliticsEC