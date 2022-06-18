import React from 'react';
import { Flex } from '../../../uikit/uikit';
import { HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks } from '../../Header/HeaderSC';
import { ASSC } from '../../ListingComponents/AdaptiveSidebar/AdaptiveSidebarSC';
import { LLBurger } from '../../ListingComponents/ListingContent/ListingListSC';

const AdaptiveSidebar:React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <LLBurger
        onClick={(() => setShow(true))}
        src={require('../../../assets/Images/Header/burger.svg')}
      />

      <ASSC show={show}>
        <Flex justify="space-between" align="flex-start" width="100%">
          <HeaderDDAdaptiveLinks className="market-wrap">
            <h3 className="market-title">
              ФОНДОВЫЙ РЫНОК
            </h3>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=RuMarket"
              onClick={(() => setShow(false))}
            >
              Российский рынок
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=EnMarket"
              onClick={(() => setShow(false))}
            >
              Американский рынок
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=KgMarket"
              onClick={(() => setShow(false))}
            >
              Кыргызский рынок
            </HeaderDDAdaptiveLink>

            <h3 className="market-title">
              СЕКТОРА
            </h3>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=miningSector"
              onClick={(() => setShow(false))}
            >
              Горднодобывающий сектор
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=industry"
              onClick={(() => setShow(false))}
            >
              Промышленность
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=financialSector"
              onClick={(() => setShow(false))}
            >
              Финансовый сектор
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=ariculture"
              onClick={(() => setShow(false))}
            >
              Сельское хозяйство
            </HeaderDDAdaptiveLink>

            <h3 className="market-title">
              РЫНКИ
            </h3>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=preciousMetalsMarket"
              onClick={(() => setShow(false))}
            >
              Рынок драгоценных металлов
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=currencyMarket"
              onClick={(() => setShow(false))}
            >
              Валютный рынок
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=cryptoMarket"
              onClick={(() => setShow(false))}
            >
              Криптовалютный рынок
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=commoditySector"
              onClick={(() => setShow(false))}
            >
              Товарный сектор
            </HeaderDDAdaptiveLink>
            <HeaderDDAdaptiveLink
              className="market"
              to="/market?param=realEstateMarket"
              onClick={(() => setShow(false))}
            >
              Рынок недвижимости
            </HeaderDDAdaptiveLink>

          </HeaderDDAdaptiveLinks>

          <LLBurger
            onClick={(() => setShow(false))}
            src={require('../../../assets/Images/Header/burgerClose.svg')}
          />
        </Flex>
      </ASSC>
    </>
  );
};

export default AdaptiveSidebar;
