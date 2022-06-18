import React from 'react';
import {
  LHLink, LHNav, LHSC, LHTotal,
} from '../../ListingComponents/ListingHeader/ListingHeaderSC';

interface Props{
  total: number;
  active: string;
}

const DisclosureLegislationHeader:React.FC<Props> = ({ total, active }) => (
  <LHSC>
    <LHNav>
      <LHLink
        to="/disclosure?param=legislationKR&header=position"
        className={active === 'position' ? 'active' : ''}
      >
        Положения
      </LHLink>

      <LHLink
        to="/disclosure?param=legislationKR&header=laws"
        className={active === 'laws' ? 'active' : ''}
      >
        Законы
      </LHLink>
    </LHNav>
  </LHSC>
);

export default DisclosureLegislationHeader;
