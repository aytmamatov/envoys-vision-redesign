import React from 'react'
import DRCDD from '../DRCDD/DRCDD'
import { DRCWrap } from '../DRCListing/DRCListingSC'

const DRCDoc:React.FC = () => {
  return (
    <DRCWrap>
      <DRCDD
        title='Раскрытие информации'
        insideTitle='Положение о раскрытии информации'
        insideTitlePath={require('../../../../Assets/Docs/Disclosure/Rules/Положение о раскрытии информации.pdf')}
        paths={[]}
      />
      <DRCDD
        title='Противодействие манипулированию'
        insideTitle='Положение о противодействии манипулированию на рынке ценных бумаг'
        insideTitlePath={require('../../../../Assets/Docs/Disclosure/Rules/Положение о противодействии манипулированию на рынке ценных бумаг.pdf')}
        paths={[]}
      />
    </DRCWrap>
  )
}

export default DRCDoc