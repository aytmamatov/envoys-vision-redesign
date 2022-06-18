import React from 'react';
import { useTranslation } from 'react-i18next';
import DisclosureDisclosure from '../DisclosureDisclosure/DisclosureDisclosure';
import DisclosureLegislation from '../DisclosureLegislation/DisclosureLegislation';
import DisclosureMembers from '../DisclosureMembers/DisclosureMembers';
import DisclosureRules from '../DisclosureRules/DisclosureRules';

interface ListingContent {
  active: string;
}

const DisclosureContentSide:React.FC<ListingContent> = ({ active }) => {
  const { t } = useTranslation();
  if (active === t('disclosure.sidebar.link1')) return (<DisclosureMembers />);
  if (active === t('disclosure.sidebar.link2')) return (<DisclosureRules />);
  if (active === t('disclosure.sidebar.link3')) return (<DisclosureLegislation />);
  return (<DisclosureDisclosure />);
};

export default DisclosureContentSide;
