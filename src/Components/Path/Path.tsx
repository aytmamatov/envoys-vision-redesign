import React from 'react';
import { Container } from '../../uikit/uikit';
import { PathSC, PathTitle, PathWrap } from './PathSC';

type PathProps = {
    title: string;
}

const Path:React.FC<PathProps> = (props) => (
  <PathSC>
    <Container>
      <PathWrap>
        <PathTitle>
          {props.title}
        </PathTitle>
      </PathWrap>
    </Container>
  </PathSC>
);

export default Path;
