import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { DCLink, DCWrap } from '../DisclosureLegislationComponents/DLCPosition/DLCPositionSC'
import { DisclosureContent } from '../DisclosureMembers/DisclosureMembersSC'
import DisclosureSideBarAdaptive from '../DisclosureSideBarAdaptive/DisclosureSideBarAdaptive'

function DisclosureDisclosure() {
  return (
    <DisclosureContent>
      <Flex width='100%' margin='0 0 35px'>
          <DisclosureSideBarAdaptive/>
      </Flex>

        <DCWrap style={{padding: '35px 0 35px 20px'}}>
          <DCLink
            href={require('../../../Assets/Docs/Disclosure/DisclosuresDoc/277 500 000.pdf')}
            target='_blank'
          >
            Отчет за 3 квартал открытого общества ОАО "Eнвойс Вижион Диджитал Эксчейндж"
          </DCLink> 
          <DCLink
            href={require('../../../Assets/Docs/Disclosure/DisclosuresDoc/5 277 500 000.pdf')}
            target='_blank'
          >
            Отчет за 4 квартал открытого акционерного общества ОАО "Eнвойс Вижион Диджитал Эксчейндж"
          </DCLink> 
          <DCLink
            href={require('../../../Assets/Docs/Disclosure/DisclosuresDoc/Отчет_ОАО_ЕВДЭ_2021_Краткое_содеражение_.pdf')}
            target='_blank'
          >
            Отчет ОАО EVDE за 1 квартал 2022 года
          </DCLink> 
          <DCLink
            href={require('../../../Assets/Docs/Disclosure/DisclosuresDoc/Отчет ОАО EVDE за 1 квартал 2022 года.pdf')}
            target='_blank'
          >
            Отчет ОАО ЕВДЭ 2021
          </DCLink> 
        </DCWrap>
    </DisclosureContent>

  )
}

export default DisclosureDisclosure