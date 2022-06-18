import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DRCBargaining from '../DisclosureRoolsComponents/DRCBargaining/DRCBargaining';
import DRCClearing from '../DisclosureRoolsComponents/DRCClearing/DRCClearing';
import DRCDoc from '../DisclosureRoolsComponents/DRCDoc/DRCDoc';
import DRCListing from '../DisclosureRoolsComponents/DRCListing/DRCListing';

interface DRCProps {
    path: string
}

const DisclosureRulesContent:React.FC<DRCProps> = ({ path }) => {
  const [activeHeader, setActiveHeader] = React.useState('listing');

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const path = searchParams.get('header');
    if (path) setActiveHeader(path);
  }, [searchParams]);

  if (activeHeader === 'listing') return <DRCListing />;
  if (activeHeader === 'docs') return <DRCDoc />;
  if (activeHeader === 'clearing') return <DRCClearing />;
  return <DRCBargaining />;
};

export default DisclosureRulesContent;
