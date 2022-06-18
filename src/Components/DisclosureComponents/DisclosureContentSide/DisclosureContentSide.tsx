import React from 'react'
import DisclosureDisclosure from '../DisclosureDisclosure/DisclosureDisclosure';
import DisclosureLegislation from '../DisclosureLegislation/DisclosureLegislation';
import DisclosureMembers from '../DisclosureMembers/DisclosureMembers';
import DisclosureRules from '../DisclosureRules/DisclosureRules';
import {useTranslation} from "react-i18next";

interface ListingContent {
  active: string;
}

const DisclosureContentSide:React.FC<ListingContent> = (props) => {
  const {t} = useTranslation()
  if(props.active === t("disclosure.sidebar.link1")) return (<DisclosureMembers/>)
  else if(props.active === t("disclosure.sidebar.link2")) return (<DisclosureRules/>)
  else if(props.active === t("disclosure.sidebar.link3")) return (<DisclosureLegislation/>)
  return (<DisclosureDisclosure/>) 
}

export default DisclosureContentSide

