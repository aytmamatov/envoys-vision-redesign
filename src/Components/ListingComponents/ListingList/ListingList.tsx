import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchComponent from '../../SearchComponent/SearchComponent'
import AdaptiveSidebar from '../AdaptiveSidebar/AdaptiveSidebar'
import CompaniesList from '../CompaniesList/CompaniesList'
import { LLBurger, LLHeaderWrap, LLInputWrap, LLSC } from '../ListingContent/ListingListSC'
import ListingHeader from '../ListingHeader/ListingHeader'

function ListingList() {
  const [activeHeader, setActiveHeader] = React.useState('all')

  const [searchParams] = useSearchParams()

  const [companiesList1, setCompaniesList1] = React.useState([
    {
      name: 'АзияАгроФуд',
      code: 'AAFD',
      cap: '0,1784'
    },
    {
      name: 'American Airlines',
      code: 'AAFD',
      cap: '0,1784'
    },
    {
      name: 'HighPeak Energy, Inc.',
      code: 'AAFD',
      cap: '0,1784'
    },
    {
      name: 'American Airlines',
      code: 'AAFD',
      cap: '0,1784'
    },
  ])

  React.useEffect(() => {
    let path = searchParams.get('header')
    if(path) setActiveHeader(path)
  }, [searchParams])
  


  return (
    <LLSC>
      <LLHeaderWrap>
        <LLInputWrap>
          <SearchComponent width='460px'/>
        </LLInputWrap>

        <AdaptiveSidebar/>
      
      </LLHeaderWrap>

      <ListingHeader total={companiesList1.length} active={activeHeader}/>


      <CompaniesList companies={companiesList1}/>
    </LLSC>
  )
}

export default ListingList