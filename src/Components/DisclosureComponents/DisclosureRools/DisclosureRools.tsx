import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import DisclosureHeader from '../DisclosureHeader/DisclosureHeader'
import { DisclosureContent } from '../DisclosureMembers/DisclosureMembersSC'
import DisclosureRoolsContent from '../DisclosureRoolsContent/DisclosureRoolsContent'
import DisclosureSideBarAdaptive from '../DisclosureSideBarAdaptive/DisclosureSideBarAdaptive'

const DisclosureRools:React.FC = () => {
  const [activeHeader, setActiveHeader] = React.useState('listing')

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

      <DisclosureHeader active={activeHeader} total={1}/>

      <DisclosureRoolsContent path={activeHeader}/>
    </DisclosureContent>
  )
}

export default DisclosureRools