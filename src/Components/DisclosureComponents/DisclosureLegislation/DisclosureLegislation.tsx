import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import DisclosureLegislationHeader from '../DisclosureHeader/DisclosureLegislationHeader'
import DisclosureLegislationContent from '../DisclosureLegislationContent/DisclosureLegislationContent'
import { DisclosureContent } from '../DisclosureMembers/DisclosureMembersSC'
import DisclosureSideBarAdaptive from '../DisclosureSideBarAdaptive/DisclosureSideBarAdaptive'

const DisclosureLegislation:React.FC = () => {
  const [activeHeader, setActiveHeader] = React.useState('position')

  const [searchParams] = useSearchParams()

  React.useEffect(() => {
    let path = searchParams.get('header')
    if(path) setActiveHeader(path)


  }, [searchParams])
  return (
    <DisclosureContent>
      <Flex width='100%' margin='0 0 35px'>
          <DisclosureSideBarAdaptive/>
      </Flex>

      <DisclosureLegislationHeader active={activeHeader} total={1}/>

      <DisclosureLegislationContent path={activeHeader}/>
    </DisclosureContent> 
  )
}

export default DisclosureLegislation