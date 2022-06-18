import React from 'react';
import {
  DRCDDBottom, DRCDDBottomTitle, DRCDDBottomTitleWrap, DRCDDDoc, DRCDDImage, DRCDDImage2, DRCDDItem, DRCDDList, DRCDDTitle, DRCDDTop,
} from './DRCDDSC';

interface Props{
    title: string;
    insideTitle: string;
    insideTitlePath: string;
    paths: {
        name: string;
        path: string;
    }[];
}

const DRCDD:React.FC<Props> = (props) => {
  const [click, setClick] = React.useState(false);

  return (
    <>
      <DRCDDTop onClick={() => setClick((val) => !val)}>
        <DRCDDTitle>{props.title}</DRCDDTitle>
        <DRCDDImage src={require('../../../../assets/Images/Disclosure/open.svg')} />
      </DRCDDTop>

      <DRCDDBottom show={click}>
        <DRCDDBottomTitleWrap>
          <DRCDDDoc src={require('../../../../assets/Images/Disclosure/doc-icon.svg')} />
          <DRCDDBottomTitle
            href={props.insideTitlePath}
            target="_blank"
          >
            {props.insideTitle}
          </DRCDDBottomTitle>

          <DRCDDImage2
            src={require('../../../../assets/Images/Disclosure/close.svg')}
            onClick={() => setClick(false)}
          />
        </DRCDDBottomTitleWrap>

        <DRCDDList>
          {props.paths.map((el, index) => (
            <DRCDDItem
              key={index}
              href={el.path}
              target="_blank"
            >
              {el.name}
            </DRCDDItem>
          ))}
        </DRCDDList>

      </DRCDDBottom>
    </>
  );
};

export default DRCDD;
