import React from 'react'
import { CLItem, CLItemName, CLItemNameC, CLItemTitle, CLWrap } from './CompaniesListSC'
import {useTranslation} from "react-i18next";

interface Props {
    companies: {}[]
}

const CompaniesList:React.FC<Props> = ({companies}) => {
  const {t} = useTranslation()

  return (
    <CLWrap>
        <CLItem>
            <CLItemTitle>{t("listing.table.header1")}</CLItemTitle>
            <CLItemTitle>{t("listing.table.header2")}</CLItemTitle>
            <CLItemTitle>{t("listing.table.header3")}</CLItemTitle>
        </CLItem>

        {companies.map((el, index) => {
            return <CLItem key={index}>
                    <CLItemName to='#' className='line'>{el['code']}</CLItemName>
                    <CLItemName to='#'>{el['name']}</CLItemName>
                    <CLItemNameC>{el['cap']}</CLItemNameC>
                </CLItem>

        })}

    </CLWrap>
  )
}

export default CompaniesList