import React from 'react'
import { LHLink, LHNav, LHSC, LHTotal } from './ListingHeaderSC'

interface Props{
  total: number;
  active: string;
}

const ListingHeader:React.FC<Props> = ({total, active}) => {


  return (
    <LHSC>
      <LHNav>
        <LHLink 
          to='/listing?param=CompanyListing&header=all' 
          className={active==='all'?'active':''}
        >
          Все
        </LHLink>

        <LHLink 
          to='/listing?param=CompanyListing&header=listing'
          className={active==='listing'?'active':''}
        >
          Листиговые
        </LHLink>
        
        <LHLink 
          to='/listing?param=CompanyListing&header=unlisted'
          className={active==='unlisted'?'active':''}
        >
          Нелиситинговые
        </LHLink>
        
        <LHLink 
          to='/listing?param=CompanyListing&header=default'
          className={active==='default'?'active':''}
        >
          Допустившие Дефолт
        </LHLink>
      
      </LHNav>

      <LHTotal>
        Всего эмитентов - {total}
      </LHTotal>
    </LHSC>
  )
}

export default ListingHeader