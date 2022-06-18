import React from 'react';
import { Container, Flex } from '../../../uikit/uikit';
import {
  HomeNewsSC, HomeNewsTitle, HomeNewsBtn1, HomeNewsUl, HomeNewsItem, HomeNewsImage, HomeNewsSmallText, HomeNewsItemTitle, HomeNewsItemDate, HomeNewsItemBtn, HomeNewsBtn2,
} from './HomeNewsSC';

const HomeNews:React.FC = () => {
  const [news, setNews] = React.useState([
    {
      date: '2022-04-11', link: 'https://www.akchabar.kg/ru/news/v-marte-kompanii-privlekli-na-fondovoj-birzhe-13-mlrd-somov/', text: 'В марте компании на первичном рынке привлекли на К…н сомов;\nОсОО «Текстиль Транс» — 400 тысяч сомов.', title: 'В марте компании привлекли на фондовой бирже 1.3 млрд сомов', image: require('../../../assets/Images/news.jpg').default,
    },
    {
      date: '2022-04-11', link: 'https://www.akchabar.kg/ru/news/za-nedelyu-unciya-zolota-ot-nb-kr-podorozhala-pochti-na-250/', text: 'На 11 апреля стоимость обратного выкупа золотых аф…нция подорожала на 22 тысячи 613 сомов, или $244.', title: 'За неделю унция золота от НБ КР подорожала почти на $250', image: require('../../../assets/Images/news1.jpg').default,
    },
    {
      date: '2022-04-11', link: 'https://www.akchabar.kg/ru/news/kyrgyzstan-v-2022-…-planiruet-sobrat-94-mlrd-somov-naloga-na-pribyl/', text: 'Прогноз налога на прибыль в 2022 году сложился в р…оды составят 1.1 — 1.3 % ВВП», — сообщает Минфин.', title: 'КР в 2022 году планирует собрать 9.4 млрд сомов налога на прибыль', image: require('../../../assets/Images/news2.jpg').default,
    },
    {
      date: '2022-04-11', link: 'https://www.akchabar.kg/ru/news/kyrgyzstan-v-2022-…-planiruet-sobrat-94-mlrd-somov-naloga-na-pribyl/', text: 'Прогноз налога на прибыль в 2022 году сложился в р…оды составят 1.1 — 1.3 % ВВП», — сообщает Минфин.', title: 'КР в 2022 году планирует собрать 9.4 млрд сомов налога на прибыль', image: require('../../../assets/Images/news3.jpg').default,
    },
  ]);

  return (
    <HomeNewsSC>
      <Container>
        <Flex justify="space-between" align="flex-start">
          <HomeNewsTitle>
            последние Новости
          </HomeNewsTitle>

          <HomeNewsBtn1>
            Больше новостей
          </HomeNewsBtn1>
        </Flex>

        <HomeNewsUl>
          {news.map((el, index) => (
            <HomeNewsItem key={index}>
              <HomeNewsImage src={el.image} />
              <HomeNewsSmallText>Кыргызстан</HomeNewsSmallText>

              <HomeNewsItemTitle>{el.title}</HomeNewsItemTitle>

              <Flex justify="space-between" margin="auto 0 0" align="center">
                <HomeNewsItemDate>{el.date}</HomeNewsItemDate>
                <HomeNewsItemBtn>
                  Подребнее
                  <img src={require('../../../assets/Images/home/news.svg')} alt="" />
                </HomeNewsItemBtn>
              </Flex>
            </HomeNewsItem>
          ))}
        </HomeNewsUl>

        <HomeNewsBtn2>
          Больше новостей
        </HomeNewsBtn2>
      </Container>
    </HomeNewsSC>
  );
};

export default HomeNews;
