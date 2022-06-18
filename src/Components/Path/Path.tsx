import React from 'react';
import { Container } from '../../uikit/uikit';
import { PathSC, PathTitle, PathWrap } from './PathSC';

type PathProps = {
    title: string;
}

const Path:React.FC<PathProps> = ({ title }) => (
  <PathSC>
    <Container>
      <PathWrap>
        <PathTitle>
          {title}
        </PathTitle>
      </PathWrap>
    </Container>
  </PathSC>
);

export default Path;
