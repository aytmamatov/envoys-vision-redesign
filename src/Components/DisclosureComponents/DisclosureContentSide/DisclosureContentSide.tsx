import React from 'react'
import DisclosureDisclosure from '../DisclosureDisclosure/DisclosureDisclosure';
import DisclosureLegislation from '../DisclosureLegislation/DisclosureLegislation';
import DisclosureMembers from '../DisclosureMembers/DisclosureMembers';
import DisclosureRules from '../DisclosureRules/DisclosureRules';

interface ListingContent {
  active: string;
}

const DisclosureContentSide:React.FC<ListingContent> = (props) => {
  if(props.active === 'Участники') return (<DisclosureMembers/>)
  else if(props.active === 'Правила') return (<DisclosureRules/>)
  else if(props.active === 'Законодательство КР') return (<DisclosureLegislation/>)
  return (<DisclosureDisclosure/>) 
}

export default DisclosureContentSide

