/* eslint-disable guard-for-in */
import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ref, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { Container, Flex } from '../../../uikit/uikit';
import {
  HomeNewsSC, HomeNewsTitle, HomeNewsBtn1,
  HomeNewsUl, HomeNewsItem, HomeNewsImage,
  HomeNewsSmallText, HomeNewsItemTitle, HomeNewsItemDate,
  HomeNewsItemBtn, HomeNewsBtn2, HomeNewsImageWrap,
} from './HomeNewsSC';

import { storage } from '../../../fireBaseConfig/Config';

export interface NewsRequestData {
  date: string | undefined;
  title: string | undefined;
  text: string | undefined;
  link: string | undefined;
  key?: string | undefined;
  image?: string | undefined;
}

export interface NewsRequest {
  data: Array<NewsRequestData>;
}

const HomeNews:React.FC = () => {
  const [news, setNews] = React.useState<NewsRequestData[]>([]);

  const nav = useNavigate();
  const { t } = useTranslation();

  function imageRequest(newsEl: NewsRequestData) {
    const newNewsReq = newsEl;
    const storage1 = storage;
    getDownloadURL(ref(storage1, `gs://envoys-vision-news.appspot.com/news/${newsEl.title}.jpg`))
      .then((url) => {
        newNewsReq.image = url;
        setNews((val) => [...val, newNewsReq]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    axios.get<NewsRequest>('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json')
      .then((res) => {
        const allNews = res.data;
        const newsArray: Array<NewsRequestData> = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const i in allNews) {
          allNews[i].key = i;
          newsArray.push(allNews[i]);
        }
        const needNews = newsArray.reverse().slice(0, 4);

        // eslint-disable-next-line no-restricted-syntax
        for (const i of needNews) {
          imageRequest(i);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <HomeNewsSC>
      <Container>
        <Flex justify="space-between" align="flex-start">
          <HomeNewsTitle>
            {t('home.NewsBlock.title')}
          </HomeNewsTitle>

          <HomeNewsBtn1 onClick={() => nav('/news')}>
            {t('home.NewsBlock.title')}
          </HomeNewsBtn1>
        </Flex>

        <HomeNewsUl>
          {news.map((el, index) => (
            <HomeNewsItem key={index}>
              <HomeNewsImageWrap>
                <HomeNewsImage src={el.image} />
              </HomeNewsImageWrap>

              <HomeNewsSmallText>Кыргызстан</HomeNewsSmallText>

              <HomeNewsItemTitle>{el.title}</HomeNewsItemTitle>

              <Flex justify="space-between" margin="auto 0 0" align="center">
                <HomeNewsItemDate>{el.date}</HomeNewsItemDate>
                <HomeNewsItemBtn onClick={() => nav(`/newsPage?key=${el.key}`)}>
                  {t('home.Banner.btn')}
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
