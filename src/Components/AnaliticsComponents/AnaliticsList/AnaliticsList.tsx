import React from 'react';
import { AnaliticsListHeader, AnaliticsListList, AnaliticsListSC } from './AnaliticsListSC';

interface Props {
    header: string[];
    list: string[][];
    earning: boolean;
}

const AnaliticsList:React.FC<Props> = ({ header, list, earning }) => (
  <AnaliticsListSC>
    <AnaliticsListHeader>
      {header.map((el, index) => (
        <p key={index}>
          {el}
        </p>
      ))}
    </AnaliticsListHeader>
    {list.map((el, index) => (
      <AnaliticsListList key={index}>
        {el.map((a, i) => (
          <p key={i} className={`${earning ? 'earning' : ''}`}>{a}</p>
        ))}
      </AnaliticsListList>
    ))}
  </AnaliticsListSC>
);

export default AnaliticsList;
