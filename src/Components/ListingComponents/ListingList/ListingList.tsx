import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchComponent from '../../SearchComponent/SearchComponent';
import AdaptiveSidebar from '../AdaptiveSidebar/AdaptiveSidebar';
import CompaniesList from '../CompaniesList/CompaniesList';
import {
  LLHeaderWrap, LLInputWrap, LLSC,
} from '../ListingContent/ListingListSC';
import ListingHeader from '../ListingHeader/ListingHeader';

function ListingList() {
  const [activeHeader, setActiveHeader] = React.useState('all');

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
    const path = searchParams.get('header');
    if (path) setActiveHeader(path);
  }, [searchParams]);

  return (
    <LLSC>
      <LLHeaderWrap>
        <LLInputWrap>
          <SearchComponent width="460px" placeholder="Поиск (По коду или названию компании)" />
        </LLInputWrap>

        <AdaptiveSidebar />

      </LLHeaderWrap>

      <ListingHeader total={companiesList1.length} active={activeHeader} />

      <CompaniesList companies={companiesList1} />
    </LLSC>
  );
}

export default ListingList;
