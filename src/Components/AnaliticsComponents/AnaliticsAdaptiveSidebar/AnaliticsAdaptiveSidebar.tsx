import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks } from '../../Header/HeaderSC';
import { ASSC } from '../../ListingComponents/AdaptiveSidebar/AdaptiveSidebarSC';
import { LLBurger } from '../../ListingComponents/ListingContent/ListingListSC';

const AnaliticsAdaptiveSidebar:React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <LLBurger
        className="analitics"
        onClick={(() => setShow(true))}
        src={require('../../../assets/Images/Header/burger.svg')}
      />

      <ASSC show={show}>
        <Flex justify="space-between" align="flex-start" width="100%">
          <HeaderDDAdaptiveLinks>
            <HeaderDDAdaptiveLink
              to="/analitics?param=dividendC"
              onClick={(() => setShow(false))}
            >
              Дивидендный календарь
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/analitics?param=earningC"
              onClick={(() => setShow(false))}
            >
              Календарь заработка
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/analitics?param=marketC"
              onClick={(() => setShow(false))}
            >
              Торговый календарь
            </HeaderDDAdaptiveLink>
          </HeaderDDAdaptiveLinks>

          <LLBurger
            className="analitics"
            onClick={(() => setShow(false))}
            src={require('../../../assets/Images/Header/burgerClose.svg')}
          />
        </Flex>
      </ASSC>
    </>
  );
};

export default AnaliticsAdaptiveSidebar;
