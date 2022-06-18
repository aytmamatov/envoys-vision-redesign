import React from 'react';
import { Flex } from '../../../../uikit/uikit';
import AdaptiveSidebar from '../../MarketAdaptiveSideBar/MarketAdaptiveSideBar';
import { MarketWrap } from '../../MarketContent/MarketContentSC';
import {
  MarketItem, MarketItemTitle, MarketList, MarketTitle, MICImageItem, MICImageItemTitle, MICImageList, MICL,
} from '../KgMarket/KgMarketSC';

const CommoditySector:React.FC = () => (
  <MarketWrap>
    <Flex>
      <AdaptiveSidebar />
    </Flex>
    <MarketTitle margin="0 0 30px" width="">
      ТОВАРНЫЙ СЕКТОР
    </MarketTitle>

    <MarketList>
      <MarketItemTitle>
        УЧАСТНИКИ
      </MarketItemTitle>

      <MarketItem>
        Закупки и тендеры (в том числе Государственные) на блокчейн технологии
      </MarketItem>
      <MarketItem>
        Выбор поставщика по рейтингу
      </MarketItem>
      <MarketItem>
        Прозрачные правила аукциона
      </MarketItem>
      <MarketItem>
        Бесплатная публикация тендера
      </MarketItem>
      <MarketItem>
        Чат между участниками сделки
      </MarketItem>
      <MarketItem>
        Возможность для всех участвовать в торгах
      </MarketItem>
      <MarketItem>
        Специализированная онлайн - площадка для закупок товаров
      </MarketItem>
      <MarketItem>
        Все проведенные аукционы записываются в блокчейн
      </MarketItem>
      <MarketItem>
        Уникальный параметризированный каталог товаров
      </MarketItem>
      <MarketItem>
        Реальные рейтинги и отзывы участников
      </MarketItem>
    </MarketList>

    <MICL>
      <MarketItemTitle>
        ПРЕИМУЩЕСТВА
      </MarketItemTitle>

      <MarketItem>
        Кросс
      </MarketItem>
      <MarketItem>
        Безопасность
      </MarketItem>
      <MarketItem>
        Площадка открывает доступ к проверенным поставщикам для проведения оптовых закупок продуктов питания по всему миру.
      </MarketItem>
      <MarketItem>
        После публикации предложения на закупку товара, поставщик сможет предложить свою ставку и в случае победы, оставить отзыв о проведенной сделке.
      </MarketItem>
      <MarketItem>
        Рейтинг
      </MarketItem>
      <MarketItem>
        Участникам успешно завершенных сделок начисляются баллы, которые повышают ваш рейтинг в системе.
      </MarketItem>
    </MICL>

    <MICImageList image={require('../../../../assets/Images/Market/marketBgС2.jpg').default}>
      <MICImageItemTitle>
        ПРЕИМУЩЕСТВА ДЛЯ ГОСУДАРСВА
      </MICImageItemTitle>

      <MICImageItem>
        Прозрачность коммерческих операций в тендерах и закупках на блокчейн технологии
      </MICImageItem>
      <MICImageItem>
        Расширение рынка сбыта продукции для фермеров и производителе
      </MICImageItem>
      <MICImageItem>
        Выход на международные рынки
      </MICImageItem>
      <MICImageItem>
        Создание конкурентной среды
      </MICImageItem>
      <MICImageItem>
        Аналитика цен в режиме реального времени
      </MICImageItem>
      <MICImageItem>
        Развитие предпринимательства в аграрном секторе
      </MICImageItem>
      <MICImageItem>
        Контроль налоговых поступлений в бюджет
      </MICImageItem>
    </MICImageList>
  </MarketWrap>
);

export default CommoditySector;
