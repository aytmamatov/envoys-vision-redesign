import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks } from '../../Header/HeaderSC';
import { ASSC } from '../../ListingComponents/AdaptiveSidebar/AdaptiveSidebarSC';
import { LLBurger } from '../../ListingComponents/ListingContent/ListingListSC';

const DisclosureSideBarAdaptive:React.FC = () => {
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
              to="/disclosure?param=members"
              onClick={(() => setShow(false))}
            >
              Участники
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/disclosure?param=rules"
              onClick={(() => setShow(false))}
            >
              Правила
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/disclosure?param=legislationKR"
              onClick={(() => setShow(false))}
            >
              Законодательство КР
            </HeaderDDAdaptiveLink>

            <HeaderDDAdaptiveLink
              to="/disclosure?param=disclosure"
              onClick={(() => setShow(false))}
            >
              Раскрытия информации
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

export default DisclosureSideBarAdaptive;
