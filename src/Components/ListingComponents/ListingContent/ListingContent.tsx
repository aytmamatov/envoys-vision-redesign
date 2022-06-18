import React from 'react';
import ListingCompanyDisclosures from '../ListingCompanyDisclosures/ListingCompanyDisclosures';
import ListingList from '../ListingList/ListingList';
import ListingsBonds from '../ListingsBonds/ListingsBonds';

interface ListingContentWrapper {
  active: string;
}

const ListingContent:React.FC<ListingContentWrapper> = ({ active }) => {
  if (active === 'Список компаний') return (<ListingList />);
  if (active === 'Облигации') return (<ListingsBonds />);
  return (<ListingCompanyDisclosures />);
};

export default ListingContent;
