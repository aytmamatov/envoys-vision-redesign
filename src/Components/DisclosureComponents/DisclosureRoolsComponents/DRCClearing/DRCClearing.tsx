import React from 'react'
import DRCDD from '../DRCDD/DRCDD'
import { DRCWrap } from '../DRCListing/DRCListingSC'

const DRCClearing:React.FC = () => {
  return (
    <DRCWrap>
      <DRCDD
        title='Депозитарно клиринговая операция'
        insideTitle='Регламент по депозитарно-клиринговым операциям'
        insideTitlePath={require('../../../../Assets/Docs/Disclosure/Rules/Регламент по депозитарно-клиринговым операциям.pdf')}
        paths={[]}
      />
      <DRCDD
        title='Размешение новой эмиссий ЦБ'
        insideTitle='О депозитарном обслуживании размещения новой эмиссии ценных бумаг'
        insideTitlePath={require('../../../../Assets/Docs/Disclosure/Rules/О депозитарном обслуживании размещения новой эмиссии ценных бумаг.pdf')}
        paths={[]}
      />
    </DRCWrap>
  )
}

export default DRCClearing