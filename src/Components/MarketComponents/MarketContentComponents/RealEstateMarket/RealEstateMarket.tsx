import React from 'react';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import { MarketWrap } from '../../MarketContent/MarketContentSC';
import {
  MarketItem, MarketItemTitle, MarketList, MarketPreTitle, MarketText, MarketTitle,
} from '../KgMarket/KgMarketSC';

const RealEstateMarket:React.FC = () => (
  <MarketWrap>
    <Flex>
      <AdaptiveSidebar />
    </Flex>
    <MarketTitle margin="0 0 50px" width="">
      СЕКТОР НЕДВИЖИМОСТИ
    </MarketTitle>

    <MarketPreTitle margin="0 0 50px" width="580px">
      АУКЦИОН НА ПОВЫШЕНИЕ АУКЦИОН НА ПОНИЖЕНИЕ
    </MarketPreTitle>

    <MarketPreTitle margin="0 0 50px" width="580px">
      ИПОТЕЧНЫЕ ЦЕННЫЕ БУМАГИ ЛИКВИДНОСТЬ ДЛЯ БАНКОВ ОРГАНИЗОВАННЫЙ РЫНОК
    </MarketPreTitle>

    <MarketText margin="0 0 20px" width="580px">
      Минимальный размер Гарантийной суммы установлен в 50 000 (пятьдесят тысяч) сом. Верхний предел для Гарантийной суммы не лимитирован.
    </MarketText>
    <MarketText margin="0 0 20px" width="580px">
      Аукцион происходит полностью в электронной форме. Участники на экранах своих девайсов видят текущую информацию по Аукциону, с помощью функционала программы им предоставлена возможность участвовать в каждом шаге Аукциона. Участникам автоматически присваиваются номера либо они указывают свое наименование самостоятельно.
    </MarketText>
    <MarketText margin="0 0 20px" width="580px">
      Аукцион считается состоявшимся при наличии хотя бы одного Покупателя, допущенного к Аукциону, и принявшего участие в нем.
    </MarketText>
    <MarketText margin="0 0 100px" width="580px">
      Биржа вправе за плату поручить Посреднику (Риэлтору) провести работы по подготовке /экспертизе пакета документов, представленных на Аукцион Организатором с определением результата проделанной работы (экспертизы).
    </MarketText>

    <MarketList>
      <MarketItemTitle>
        КАКИЕ ПРОБЛЕМЫ РЕШАЕТ
      </MarketItemTitle>

      <MarketItem>
        Реализации имущества по оптимальной цене на нужную дату
      </MarketItem>
      <MarketItem>
        Гарантия исполнения обязательств сторонами
      </MarketItem>
      <MarketItem>
        Гарантия выплаты комиссии посреднику
      </MarketItem>
      <MarketItem>
        Возможность участия в торгах из любой точки мира
      </MarketItem>
      <MarketItem>
        Невыгодная начальная цена
      </MarketItem>
      <MarketItem>
        Снижение стоимости недвижимости в результате торгов
      </MarketItem>
    </MarketList>

    <MarketList style={{ margin: '100px 0 50px' }}>
      <MarketItemTitle>
        УЧАСТНИКИ:
      </MarketItemTitle>

      <MarketItem>
        Собственники (продавцы)
      </MarketItem>
      <MarketItem>
        Застройщики
      </MarketItem>
      <MarketItem>
        Покупатели
      </MarketItem>
      <MarketItem>
        Риелторы (в роли посредников)
      </MarketItem>
      <MarketItem>
        ГРС
      </MarketItem>
      <MarketItem>
        Организатор торгов
      </MarketItem>
    </MarketList>

    <MarketPreTitle margin="100px 0 20px" width="580px">
      ИПОТЕЧНЫЕ ЦЕННЫЕ БУМАГИ
    </MarketPreTitle>

    <MarketText margin="0 0 20px" width="580px">
      ― разновидность вторичных ценных бумаг, служащих универсальным инструментом рефинансирования инвестиций в жилищное строительство, то есть средством для краткосрочного восстановления финансовых вливаний в жилые объекты, которые приобретаются на рынке посредством ипотеки. При этом ценные бумаги поддерживают стабильность рефинансирования ипотечного строительства за счет того, что возврат денежных средств инвестору осуществляется в сроки меньшие, нежели сроки погашения суммы ипотечного кредита.
    </MarketText>

  </MarketWrap>
);

export default RealEstateMarket;
