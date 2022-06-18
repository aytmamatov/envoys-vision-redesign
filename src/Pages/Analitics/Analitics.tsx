import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import AnaliticsContent from '../../components/AnaliticsComponents/AnaliticsContent/AnaliticsContent';
import Path from '../../components/Path/Path';
import { Container } from '../../uikit/uikit';

const AnaliticsWrap = styled.div`
    background: #FCFCFC;
`;

const Analitics:React.FC = () => {
  const { t } = useTranslation();

  const [activePath, setActivePath] = React.useState(String(t('analitics.pages.p1')));

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const path = searchParams.get('param');
    if (path) {
      if (path === 'dividendC') setActivePath(t('analitics.pages.p1'));
      if (path === 'earningC') setActivePath(t('analitics.pages.p2'));
      if (path === 'marketC') setActivePath(t('analitics.pages.p3'));
    }
  }, [searchParams, t]);

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
