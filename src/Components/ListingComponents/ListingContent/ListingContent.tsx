import React from 'react';
import { useTranslation } from 'react-i18next';
import ListingCompanyDisclosures from '../ListingCompanyDisclosures/ListingCompanyDisclosures';
import ListingList from '../ListingList/ListingList';
import ListingsBonds from '../ListingsBonds/ListingsBonds';

interface ListingContentWrapper {
  active: string;
}

const ListingContent:React.FC<ListingContentWrapper> = ({ active }) => {
  const { t } = useTranslation();

  if (active === t('listing.sideBar.path1')) return (<ListingList />);
  if (active === t('listing.sideBar.path2')) return (<ListingsBonds />);
  return (<ListingCompanyDisclosures />);
};

export default ListingContent;
