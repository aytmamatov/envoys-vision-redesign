import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import DisclosureSideBar from '../../components/DisclosureComponents/DisclosureSidebar/DisclosureSideBar';
import DisclosureContentSide from '../../components/DisclosureComponents/DisclosureContentSide/DisclosureContentSide';
import Path from '../../components/Path/Path';
import { Container, Flex } from '../../uikit/uikit';

const DisclosureWrap = styled.div`
    background: #FCFCFC;
`;

const Disclosure:React.FC = () => {
  const [activePath, setActivePath] = useState('Участники');

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const path = searchParams.get('param');
    if (path) {
      if (path === 'members') setActivePath('Участники');
      if (path === 'rules') setActivePath('Правила');
      if (path === 'legislationKR') setActivePath('Законодательство КР');
      if (path === 'disclosure') setActivePath('Раскрытия информации');
    }
  }, [searchParams]);

  return (
    <DisclosureWrap>
      <Path title={activePath} />
      <Container>
        <Flex width="100%" style={{ background: '#FCFCFC' }}>
          <DisclosureSideBar active={activePath} />

          <DisclosureContentSide active={activePath} />
        </Flex>
      </Container>
    </DisclosureWrap>
  );
};

export default Disclosure;
