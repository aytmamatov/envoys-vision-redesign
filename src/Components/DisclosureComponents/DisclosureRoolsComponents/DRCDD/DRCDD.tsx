import React from 'react';
import {
  DRCDDBottom, DRCDDBottomTitle, DRCDDBottomTitleWrap, DRCDDDoc,
  DRCDDImage, DRCDDImage2, DRCDDItem, DRCDDList, DRCDDTitle, DRCDDTop,
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

const DRCDD:React.FC<Props> = ({
  title, insideTitlePath, insideTitle, paths,
}) => {
  const [click, setClick] = React.useState(false);

  return (
    <>
      <DRCDDTop onClick={() => setClick((val) => !val)}>
        <DRCDDTitle>{title}</DRCDDTitle>
        <DRCDDImage src={require('../../../../assets/Images/Disclosure/open.svg')} />
      </DRCDDTop>

      <DRCDDBottom show={click}>
        <DRCDDBottomTitleWrap>
          <DRCDDDoc src={require('../../../../assets/Images/Disclosure/doc-icon.svg')} />
          <DRCDDBottomTitle
            href={insideTitlePath}
            target="_blank"
          >
            {insideTitle}
          </DRCDDBottomTitle>

          <DRCDDImage2
            src={require('../../../../assets/Images/Disclosure/close.svg')}
            onClick={() => setClick(false)}
          />
        </DRCDDBottomTitleWrap>

        <DRCDDList>
          {paths.map((el, index) => (
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
