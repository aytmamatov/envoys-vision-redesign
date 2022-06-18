import React from 'react';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import MarketWrap from '../../MarketContent/MarketContentSC';
import {
  MarketCard, MarketCards, MarketImages, MarketItem, MarketItem2, MarketItemTitle, MarketItemTitle2, MarketList, MarketPreTitle, MarketText, MarketTitle,
} from '../KgMarket/KgMarketSC';

const EnMarket:React.FC = () => (
  <MarketWrap>
    <Flex>
      <AdaptiveSidebar />
    </Flex>
    <MarketTitle margin="0 0 30px" width="700px">
      ТОКЕНИЗИРОВАННЫЕ АКТИВЫ
    </MarketTitle>
    <MarketText margin="0 0 50px" width="580px">
      STO — это более быстрый и дешевый аналог IPO. Расходы
      на листинг уменьшаются за счет отсутствия необходимости вовлекать посредников наподобие инвестиционных банков. Процедуры аудита и андеррайтинга для блокчейн-проектов также проще. А участвовать в STO может практически любой частный инвестор
    </MarketText>
    <MarketImages src={require('../../../../assets/Images/Market/market1.jpg').default} />
    <MarketPreTitle margin="50px 0 0" width="895px">
      ТОКЕНИЗАЦИЯ — СОЗДАНИЕ ЗАПИСИ, УДОСТОВЕРЯЮЩЕЙ ОБЪЕМ ПРАВ
      НА ОБЪЕКТ МАТЕРИАЛЬНОГО МИРА
      (В ПРОЦЕССЕ КОТОРОГО ВЫПУСКАЮТ ТОКЕН)
      ТОКЕН РЕГИСТРИРУЮТ
      С ПОМОЩЬЮ ТЕХНОЛОГИИ
      РАСПРЕДЕЛЕННОГО РЕЕСТРА
    </MarketPreTitle>

    <MarketTitle margin="100px 0 30px" width="770px">
      МЕСТНЫЕ И ИНОСТРАННЫЕ ЦБ
    </MarketTitle>

    <MarketList>
      <MarketItemTitle>
        СЕКТОРЫ НА ЦБ:
      </MarketItemTitle>

      <MarketItem>
        Акции
      </MarketItem>
      <MarketItem>
        Блю чипс действующих компаний
      </MarketItem>
      <MarketItem>
        Горный сектор
      </MarketItem>
    </MarketList>

    <MarketImages src={require('../../../../assets/Images/Market/market2.jpg').default} />

    <MarketTitle margin="100px 0 30px" width="770px">
      ТОКЕНИЗИРОВАНИЕ ИНОСТРАННЫХ АКЦИЙ
    </MarketTitle>

    <MarketText margin="0 0 20px" width="580px">
      Токенизированные акции — это цифровые токены акций, которые торгуются на традиционных фондовых биржах. Стоимость токенизированных акций привязана к стоимости соответствующих базовых акций. Возьмем для примера акции Apple inc.
    </MarketText>
    <MarketText margin="0 0 20px" width="580px">
      Если стоимость акции Apple вырастит, то соответствующим образом вырастет и стоимость токенизированных акций. При падении стоимости акций Apple, стоимость токенизированных акций также будет снижаться.
    </MarketText>
    <MarketText margin="0 0 20px" width="580px">
      Токены созданны на базе залога акций, хранящегося в Депозитарии. Следовательно, каждая токенизированная акция представляет собой долю в соответствующей компании, прошедшей листинг.
    </MarketText>
    <MarketText margin="0 0 100px" width="580px">
      Владение токенизированными акциями не передает вам никаких прав акционеров. Вы лишь участвуете в экономическом развитии базового актива, включая выплату дивидендов (если она предусмотрена).
    </MarketText>

    <MarketCards>
      <MarketCard>
        <h1>
          Эмитент
        </h1>
        <p>
          Блокчейн выступает в роли регистратора
        </p>
        <p>
          Юридическое и бенефициарное право собственности переносится в блокчейн
        </p>
      </MarketCard>

      <MarketCard>
        <h1>
          Кастодиан
        </h1>
        <p>
          Смарт контракты заменяют платежных агентов
          и реальным миром
        </p>
        <p>
          Кастодиан поддерживает связь между блокчейн
        </p>
      </MarketCard>

      <MarketCard>
        <h1>
          инвесторы
        </h1>
        <p>
          Запись операций в распределенном реестре
        </p>
        <p>
          Рассчеты и клиринг в сети блокчейн
        </p>
      </MarketCard>
    </MarketCards>

    <MarketTitle margin="100px 0 30px" width="932px">
      ВОЗЬМЕМ ДЛЯ ПРИМЕРА ЗОЛОТОДОБЫВАЮЩУЮ КОМПАНИЮ ОАО “МАЙНИНГ”
    </MarketTitle>

    <MarketList>
      <MarketItemTitle2>
        ДЛЯ ВЫПУСКА ТОКЕНИЗИРОВАННЫХ АКЦИЙ, И ПОСЛЕДУЮЩЕГО ПРИВЛЕЧЕНИЯ ИНВЕСТОРОВ ПУТЕМ STO:
      </MarketItemTitle2>
      <MarketItem2>
        Акционеры ОАО принимают соответствующее решение на ГОСА;
      </MarketItem2>
      <MarketItem2>
        Передают в Депозитарий какую-то часть акций ОАО по договору о залоге для последующей их оцифровки (могут быть переданы акции дополнительной эмиссии, либо часть акций уже принадлежащих акционерам).
      </MarketItem2>
      <MarketItem2>
        Вместо замороженных акций, в оборот выпускаются цифровые токены, которые будут подтверждать ее держателю те же права, что и акция.
      </MarketItem2>
      <MarketItem2>
        Выпущенные токены размещаются среди инвесторов в торговую системе цифровой биржи.
      </MarketItem2>
    </MarketList>
  </MarketWrap>
);

export default EnMarket;
