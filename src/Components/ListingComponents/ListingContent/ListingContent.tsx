import React, { useState } from 'react'
import ListingCompanyDisclosures from '../ListingCompanyDisclosures/ListingCompanyDisclosures';
import ListingList from '../ListingList/ListingList';
import ListingsBonds from '../ListingsBonds/ListingsBonds';

interface ListingContent {
  active: string;
}

const ListingContent:React.FC<ListingContent> = (props) => {
  if(props.active === 'Список компаний') return (<ListingList/>)
  else if(props.active === 'Облигации') return (<ListingsBonds/>)
  else return (<ListingCompanyDisclosures/>) 
}

export default ListingContent

