import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import AnaliticsContent from '../../components/AnaliticsComponents/AnaliticsContent/AnaliticsContent';
import Path from '../../components/Path/Path';
import { Container } from '../../uikit/uikit';

const AnaliticsWrap = styled.div`
    background: #FCFCFC;
`;

const Analitics:React.FC = () => {
  const [activePath, setActivePath] = React.useState('Дивидендный календарь');

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const path = searchParams.get('param');
    if (path) {
      if (path === 'dividendC') setActivePath('Дивидендный календарь');
      if (path === 'earningC') setActivePath('Календарь заработка');
      if (path === 'marketC') setActivePath('Торговый календарь');
    }
  }, [searchParams]);

  return (
    <AnaliticsWrap>
      <Path title={activePath} />

      <Container>
        <AnaliticsContent currentPage={activePath} />
      </Container>
    </AnaliticsWrap>
  );
};

export default Analitics;
