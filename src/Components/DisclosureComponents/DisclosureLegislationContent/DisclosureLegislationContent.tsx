import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DLCLaws from '../DisclosureLegislationComponents/DLCLaws/DLCLaws';
import DLCPosition from '../DisclosureLegislationComponents/DLCPosition/DLCPosition';

interface DRCProps {
  path: string
}

const DisclosureLegislationContent:React.FC<DRCProps> = ({ path }) => {
  const [activeHeader, setActiveHeader] = React.useState('listing');

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const currentPath = searchParams.get('header');
    if (currentPath) setActiveHeader(path);
  }, [searchParams]);

  if (activeHeader === 'position') return <DLCPosition />;
  return <DLCLaws />;
};

export default DisclosureLegislationContent;
