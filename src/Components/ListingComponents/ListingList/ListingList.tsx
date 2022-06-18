import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchComponent from '../../SearchComponent/SearchComponent';
import AdaptiveSidebar from '../AdaptiveSidebar/AdaptiveSidebar';
import CompaniesList from '../CompaniesList/CompaniesList';
import {
  LLHeaderWrap, LLInputWrap, LLSC,
} from '../ListingContent/ListingListSC';
import ListingHeader from '../ListingHeader/ListingHeader';

const ListingList:React.FC = () => {
  const { t } = useTranslation();

  const [activeHeader, setActiveHeader] = React.useState(String(t('listing.headerLink.link1')));

  const [searchParams] = useSearchParams();

  const [companiesList1] = React.useState([
    {
      name: 'АзияАгроФуд',
      code: 'AAFD',
      cap: '0,1784',
    },
    {
      name: 'American Airlines',
      code: 'AAFD',
      cap: '0,1784',
    },
    {
      name: 'HighPeak Energy, Inc.',
      code: 'AAFD',
      cap: '0,1784',
    },
    {
      name: 'American Airlines',
      code: 'AAFD',
      cap: '0,1784',
    },
  ]);

  React.useEffect(() => {
    setActiveHeader(t('listing.headerLink.link1'));
    const path = searchParams.get('header');
    if (path) setActiveHeader(path);
  }, [searchParams, t]);

  return (
    <LLSC>
      <LLHeaderWrap>
        <LLInputWrap>
          <SearchComponent width="460px" placeholder={t('listing.placeholder')} />
        </LLInputWrap>

        <AdaptiveSidebar />

      </LLHeaderWrap>

      <ListingHeader total={companiesList1.length} active={activeHeader} />

      <CompaniesList companies={companiesList1} />
    </LLSC>
  );
};

export default ListingList;
