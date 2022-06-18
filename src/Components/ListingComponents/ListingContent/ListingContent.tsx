import React, { useState } from 'react'
import ListingCompanyDisclosures from '../ListingCompanyDisclosures/ListingCompanyDisclosures';
import ListingList from '../ListingList/ListingList';
import ListingsBonds from '../ListingsBonds/ListingsBonds';
import {useTranslation} from "react-i18next";

interface ListingContent {
  active: string;
}

const ListingContent:React.FC<ListingContent> = (props) => {
  const {t} = useTranslation()

  if(props.active === t("listing.sideBar.path1")) return (<ListingList/>)
  else if(props.active === t("listing.sideBar.path2")) return (<ListingsBonds/>)
  else return (<ListingCompanyDisclosures/>) 
}

export default ListingContent

