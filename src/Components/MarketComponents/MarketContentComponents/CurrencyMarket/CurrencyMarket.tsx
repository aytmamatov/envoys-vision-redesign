import React from 'react'
import { Flex } from '../../../../uikit/uikit'
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar'
import { MarketWrap } from '../../MarketContent/MarketContentSC'
import { MarketItem, MarketItemTitle, MarketList, MarketTitle, MICImageItem, MICImageItemTitle, MICImageList, MICItem, MICL, MICList } from '../KgMarket/KgMarketSC'

const CurrencyMarket:React.FC = () => {
  return (
    <MarketWrap>
      <Flex>
        <AdaptiveSidebar/>
      </Flex>
      <MarketTitle margin='0 0 30px' width=''>
        ВАЛЮТНЫЕ СДЕЛКИ
      </MarketTitle>

      <MarketList>
        <MarketItemTitle>
          СДЕЛКИ «СПОТ»
        </MarketItemTitle>

        <MarketItem>
          Валюта – Американские доллары
        </MarketItem>
        <MarketItem>
          Кросс-курсы
        </MarketItem>
      </MarketList>

      <MarketTitle margin='100px 0 30px' width=''>
        ДЕРИВАТИВЫ
      </MarketTitle>

      <MarketList>
        <MarketItemTitle>
          СИНТЕТИЧЕСКИЕ СОГЛАШЕНИЯ ПО ВАЛЮТНОМУ ОБМЕНУ (SAFE8)
        </MarketItemTitle>

        <MarketItem>
          Валютные фьючерс 5
        </MarketItem>
        <MarketItem>
          Валютно-процентные своп 5
        </MarketItem>
        <MarketItem>
          Валютные опционы
        </MarketItem>
      </MarketList>


      <MarketList>
        <MarketItemTitle>
          УЧАСТНИКИ
        </MarketItemTitle>

        <MarketItem>
          ОБМЕНКИ-ПРОЗРАЧНОСТЬ И РЕАЛЬНЫЕ ОБЪЕМ
        </MarketItem>
        <MarketItem>
          ЮРИДИЧЕСКИЕ ЛИЦА - ВЫГОДА И ХЕДЖИРОВАНИЕ
        </MarketItem>
        <MarketItem>
          БАНКИ
        </MarketItem>
        <MarketItem>
          МЕЖДУНАРОДНЫЕ ЕДИНЫЕ СТАКАНЫ
        </MarketItem>
      </MarketList>



        <MICImageList image={require('../../../../Assets/Images/Market/marketBgС1.jpg')}>
          <MICImageItemTitle>
            УЧАСТНИКИ ВАЛЮТНОГО РЫНКА
          </MICImageItemTitle>

          <MICImageItem>
            Валютные биржи
          </MICImageItem>
          <MICImageItem>
            Центральные банки
          </MICImageItem>
          <MICImageItem>
            Финансовые организации
          </MICImageItem>
          <MICImageItem>
            Брокеры
          </MICImageItem>
          <MICImageItem>
            Физические лица
          </MICImageItem>
          <MICImageItem>
            Международные валютно-кредитные и финансовые организации
          </MICImageItem>
        </MICImageList>







      <MarketTitle width='600px' margin='100px 0 30px'>
        УЧАСВЫГОДЫ ДЛЯ КОРПОРАЦИЙ НА ВАЛЮТНОМ РЫНКЕТНИКИ
      </MarketTitle>

      <MICL>
        <MarketItem>
          БОЛЕЕ ВЫГОДНЫЕ ЦЕНОВЫЕ УСЛОВИЯ ПО ВАЛЮТНОМУ КУРСУ ПО СРАВНЕНИЮ С СЕГМЕНТОМ БАНККОРПОРАТ (ЭКОНОМИЯ БАНКОВСКОЙ МАРЖИ, ВОЗМОЖНОСТЬ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОГО СПРЕДА БИРЖЕВОГО СТАКАНА): ДЛЯ КОНВЕРСИОННЫХ СДЕЛОК ТOD, TOM, SPOT
        </MarketItem>
        <MarketItem>
          ДЛЯ ВАЛЮТНЫХ СВОПОВ (СВОП-РАЗНИЦЫ) ТРАНСПАРЕНТНОСТЬ И РЫНОЧНОСТЬ ЦЕНООБРАЗОВАНИЯ (ОТСУТСТВИЕ ПРОСКАЛЬЗЫВАНИЯ)
        </MarketItem>
        <MarketItem>
          СНЯТИЕ КРЕДИТНЫХ РИСКОВ НА КОНТРАГЕНТОВ (БАНКИ И ДР. КОРПОРАТЫ) ЗА СЧЕТ РАСЧЕТОВ ЧЕРЕЗ ЦЕНТРАЛЬНОГО КОНТРАГЕНТА (ЦК)
        </MarketItem>
        <MarketItem>
          ВОЗМОЖНОСТЬ ЗАКЛЮЧАТЬ СДЕЛКИ
        </MarketItem>
        <MarketItem>
          МАКСИМАЛЬНАЯ ОПЕРАЦИОННАЯ ЭФФЕКТИВНОСТЬ И НАДЕЖНОСТЬ:
          <MICList>
            <MICItem>
              Online торговля, заключение сделки «в один клик»
            </MICItem>
            <MICItem>
              Удобный электронный документооборот при расчетах
            </MICItem>
            <MICItem>
              Стандартно обрабатываемые отчеты
            </MICItem>
            <MICItem>
              Использование мультивалютного обеспечения в расчетах, единое обеспечение и неттинг по всем инструментам валютного рынка
            </MICItem>
          </MICList>
        </MarketItem>
        <MarketItem>
          ВОЗМОЖНОСТЬ ПРОВЕДЕНИЯ ВАЛЮТНЫХ КОНВЕРСИЙ В НЕРАБОЧИЕ ДНИ
        </MarketItem>
      </MICL>


    </MarketWrap>
  )
}

export default CurrencyMarket