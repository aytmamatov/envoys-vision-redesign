import React from 'react';
import DisclosureDisclosure from '../DisclosureDisclosure/DisclosureDisclosure';
import DisclosureLegislation from '../DisclosureLegislation/DisclosureLegislation';
import DisclosureMembers from '../DisclosureMembers/DisclosureMembers';
import DisclosureRules from '../DisclosureRules/DisclosureRules';

interface ListingContent {
  active: string;
}

const DisclosureContentSide:React.FC<ListingContent> = ({ active }) => {
  if (active === 'Участники') return (<DisclosureMembers />);
  if (active === 'Правила') return (<DisclosureRules />);
  if (active === 'Законодательство КР') return (<DisclosureLegislation />);
  return (<DisclosureDisclosure />);
};

export default DisclosureContentSide;
