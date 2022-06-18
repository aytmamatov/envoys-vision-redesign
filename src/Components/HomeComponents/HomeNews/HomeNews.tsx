import axios from 'axios'
import React from 'react'
import { Container, Flex } from '../../../uikit/uikit'
import { HomeNewsSC, HomeNewsTitle, HomeNewsBtn1, HomeNewsUl, HomeNewsItem, HomeNewsImage, HomeNewsSmallText, HomeNewsItemTitle, HomeNewsItemDate, HomeNewsItemBtn, HomeNewsBtn2, HomeNewsImageWrap} from './HomeNewsSC'
import {useTranslation} from "react-i18next";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {  storage } from '../../../fireBaseConfig/Config'
import { useNavigate } from 'react-router-dom';

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
  const [news, setNews] = React.useState<NewsRequestData[]>([])

  const nav = useNavigate()
  const {t} = useTranslation()
  
  
  function imageRequest(newsEl: NewsRequestData){
    let newNewsReq = newsEl;
    const storage1 = storage
    getDownloadURL(ref(storage1, `gs://envoys-vision-news.appspot.com/news/${newsEl.title}.jpg`))
      .then((url) => {
        newNewsReq.image = url 
        setNews(val => [...val, newNewsReq])
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  React.useEffect(() => {
    axios.get<NewsRequest>('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json')
      .then(res => {
        let allNews = res.data
        let newsArray: Array<NewsRequestData> = []
        for(let i in allNews){
          allNews[i].key = i
          newsArray.push(allNews[i])
        }
        let needNews = newsArray.reverse().slice(0, 4)
        
        for(let i of needNews){
          imageRequest(i)
        }
      })
      .catch(err => {
        console.log(err);
      })

  }, [])


  

  return (
    <HomeNewsSC>
      <Container>
        <Flex justify='space-between' align='flex-start'>
          <HomeNewsTitle>
            {t("home.NewsBlock.title")}
          </HomeNewsTitle>

          <HomeNewsBtn1 onClick={() => nav("/news")}>
            {t("home.NewsBlock.title")}
          </HomeNewsBtn1>
        </Flex>

        <HomeNewsUl>
          {news.map((el, index) => (
            <HomeNewsItem key={index}>
              <HomeNewsImageWrap>
                <HomeNewsImage src={el.image}/>
              </HomeNewsImageWrap>

              <HomeNewsSmallText>Кыргызстан</HomeNewsSmallText>

              <HomeNewsItemTitle>{el.title}</HomeNewsItemTitle>

              <Flex justify='space-between' margin='auto 0 0' align='center'>
                <HomeNewsItemDate>{el.date}</HomeNewsItemDate>
                <HomeNewsItemBtn onClick={() => nav("/newsPage?key="+el.key)}>
                {t("home.Banner.btn")}
                  <img src={require('../../../Assets/Images/home/news.svg')['default']} alt="" />
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
  )
}


export default HomeNews