import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  LHLink, LHNav, LHSC, LHTotal,
} from './ListingHeaderSC';

interface Props{
  total: number;
  active: string;
}

const ListingHeader:React.FC<Props> = ({ total, active }) => {
  const { t } = useTranslation();

  return (
    <LHSC>
      <LHNav>
        <LHLink
          to="/listing?param=CompanyListing&header=all"
          className={active === 'all' ? 'active' : ''}
        >
          {t('listing.headerLink.link1')}
        </LHLink>

        <LHLink
          to="/listing?param=CompanyListing&header=listing"
          className={active === 'listing' ? 'active' : ''}
        >
          {t('listing.headerLink.link2')}
        </LHLink>

        <LHLink
          to="/listing?param=CompanyListing&header=unlisted"
          className={active === 'unlisted' ? 'active' : ''}
        >
          {t('listing.headerLink.link3')}
        </LHLink>

        <LHLink
          to="/listing?param=CompanyListing&header=default"
          className={active === 'default' ? 'active' : ''}
        >
          {t('listing.headerLink.link4')}
        </LHLink>

      </LHNav>

      <LHTotal>
        {t('listing.headerLink.elements')}
        {' '}
        -
        {' '}
        {total}
      </LHTotal>
    </LHSC>
  );
};

export default ListingHeader;
