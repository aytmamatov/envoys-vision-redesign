import React from 'react'
import DisclosureDisclosure from '../DisclosureDisclosure/DisclosureDisclosure';
import DisclosureLegislation from '../DisclosureLegislation/DisclosureLegislation';
import DisclosureMembers from '../DisclosureMembers/DisclosureMembers';
import DisclosureRools from '../DisclosureRools/DisclosureRools';

interface ListingContent {
  active: string;
}

const DisclosureContentSide:React.FC<ListingContent> = (props) => {
  if(props.active === 'Участники') return (<DisclosureMembers/>)
  else if(props.active === 'Правила') return (<DisclosureRools/>)
  else if(props.active === 'Законодательство КР') return (<DisclosureLegislation/>)
  return (<DisclosureDisclosure/>) 
}

export default DisclosureContentSide

