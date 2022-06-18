import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Flex } from '../../../uikit/uikit'
import { TableSC, TableWrap } from './HomeReportSC'
import {useTranslation} from "react-i18next";

const HomeReport:React.FC = () => {
    const [tableInfo, setTableInfo] = React.useState([
        [
            'KMOT.P',
            'ОАО «Ками моторс»',
            'KG0301222517',
            'Привелигированные акции',
            '0',
            '0',
            '137',
            '2512',
            'Нелистинг',
        ]
    ]
    )
    const {t} = useTranslation()

  return (
            <TableSC>
                <Container>
                    <TableWrap>
                       <table>
                           <tr>
                                <th className='first'>{t("home.Report.R1")}</th>
                                <th>{t("home.Report.R2")}</th>
                                <th>{t("home.Report.R3")}</th>
                                <th> {t("home.Report.R4.R11")} <br /> {t("home.Report.R4.R12")} </th>
                                <th> {t("home.Report.R5.R11")} <br /> {t("home.Report.R5.R12")} </th>
                                <th>{t("home.Report.R6")}</th>
                           </tr>
    
                           <tr className='preHeader'>
                               <td className='first small'>{t("home.Report.R7")}</td>
                               <td></td>
                               <td></td>
                               <td className='half small-y'>{t("home.Report.R8.R11")}</td>
                               <td className='half small-y'>{t("home.Report.R8.R12")}</td>
                               <td className='half small-y'>{t("home.Report.R8.R13")}</td>
                               <td className='half small-y'>{t("home.Report.R8.R14")}</td>
                               <td></td>
                           </tr>
    
                            <tr>
                                <td className='first'><span>KMOT.P</span>ОАО «Ками моторс»</td>
                                <td className='number'>KG0301222517</td>
                                <td>Привелигированные акции</td>
                                <td className='half'>0</td>
                                <td className='half'>0</td>
                                <td className='half'>137</td>
                                <td className='half'>2512</td>
                                <td>Нелистинг</td>
                            </tr>
    
                       </table>
                    </TableWrap>
                </Container>
            </TableSC>
  )
}

export default HomeReport