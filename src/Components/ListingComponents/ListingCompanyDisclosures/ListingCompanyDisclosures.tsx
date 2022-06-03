import React from 'react'
import { Flex } from '../../../uikit/uikit'
import AdaptiveSidebar from '../AdaptiveSidebar/AdaptiveSidebar'

const ListingCompanyDisclosures:React.FC = () => {
  return (
    <Flex justify='space-between' width='100%' margin='50px 0 0'>
      <span>ListingCompanyDisclosures</span>

      <AdaptiveSidebar/>
    </Flex>
  )
}

export default ListingCompanyDisclosures