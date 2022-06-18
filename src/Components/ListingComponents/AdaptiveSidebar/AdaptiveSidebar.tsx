import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks } from '../../Header/HeaderSC';
import { LLBurger } from '../ListingContent/ListingListSC';
import { ASSC } from './AdaptiveSidebarSC';

const AdaptiveSidebar:React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <LLBurger
        onClick={(() => setShow(true))}
        src={require('../../../assets/Images/Header/burger.svg').default}
      />

      <ASSC show={show}>
        <Flex justify="space-between" align="flex-start" width="100%">
          <HeaderDDAdaptiveLinks>
            <HeaderDDAdaptiveLink
              to="/listing?param=CompanyListing"
              onClick={(() => setShow(false))}
            >
              Список компаний
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/listing?param=Bonds"
              onClick={(() => setShow(false))}
            >
              Облигации
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/listing?param=CompanyDisclosures"
              onClick={(() => setShow(false))}
            >
              Раскрытия информации компании
            </HeaderDDAdaptiveLink>
          </HeaderDDAdaptiveLinks>

          <LLBurger
            onClick={(() => setShow(false))}
            src={require('../../../assets/Images/Header/burgerClose.svg').default}
          />
        </Flex>
      </ASSC>
    </>
  );
};

export default AdaptiveSidebar;
