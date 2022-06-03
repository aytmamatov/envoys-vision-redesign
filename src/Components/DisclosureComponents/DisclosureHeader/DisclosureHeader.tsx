import React from 'react'
import { LHLink, LHNav, LHSC, LHTotal } from '../../ListingComponents/ListingHeader/ListingHeaderSC';

interface Props{
  total: number;
  active: string;
}

const DisclosureHeader:React.FC<Props> = ({total, active}) => {


  return (
    <LHSC>
      <LHNav>
        <LHLink 
          to='/disclosure?param=rools&header=listing' 
          className={active==='listing'?'active':''}
        >
          Листинг
        </LHLink>

        <LHLink 
          to='/disclosure?param=rools&header=clearing'
          className={active==='clearing'?'active':''}
        >
          Депозитарий И Клиринг
        </LHLink>
        
        <LHLink 
          to='/disclosure?param=rools&header=docs'
          className={active==='docs'?'active':''}
        >
          Внутренние Документы
        </LHLink>
        
        <LHLink 
          to='/disclosure?param=rools&header=bargaining'
          className={active==='bargaining'?'active':''}
        >
            Торги (Фондовая Биржа)
        </LHLink>

      </LHNav>
    </LHSC>
  )
}

export default DisclosureHeader