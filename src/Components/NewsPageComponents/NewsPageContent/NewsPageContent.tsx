import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Container, Flex } from '../../../uikit/uikit'
import { NewsRequest, NewsRequestData } from '../../HomeComponents/HomeNews/HomeNews'
import { HomeNewsImage, HomeNewsImageWrap, HomeNewsItem, HomeNewsItemBtn, HomeNewsItemDate, HomeNewsItemTitle, HomeNewsSmallText } from '../../HomeComponents/HomeNews/HomeNewsSC'
import { NewsPageContentDate, NewsPageContentImage, NewsPageContentText, NewsPageContentTitle, NewsPageList, NewsPageListWrap, NewsPageWrap } from './NewsPageContentSC'

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {  storage } from '../../../fireBaseConfig/Config'
import axios from 'axios'

const NewsPageContent:React.FC<NewsRequestData> = (props) => {
  const [news, setNews] = React.useState<NewsRequestData[]>([])


  function checkText(text: string | undefined){
    if(text !== undefined){
      let texts: string[] = []
      let lineText: string = ''
  
      for(let i=0; i < text.length; i++){
        lineText += text[i]
        if(text[i] === "\n"){
          texts.push(lineText)
          lineText = ''
        }
      }
      return texts.map((text, i) => {
        if(text === '\n'){
          return <br key={i}/>
        }
        return <NewsPageContentText key={i}>{text.slice(0, text.length-2)}</NewsPageContentText>
      })
    }
  }

  const nav = useNavigate()
  const [searchParams] = useSearchParams()



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
    setNews([])
    axios.get<NewsRequest>('https://envoys-vision-news-default-rtdb.firebaseio.com/news.json')
      .then(res => {
        let allNews = res.data
        let newsArray: Array<NewsRequestData> = []
        for(let i in allNews){
          if(allNews[i].title !== props.title){
            allNews[i].key = i
            newsArray.push(allNews[i])
          }
        }
        let needNews = newsArray.reverse().slice(0, 2)
        for(let i of needNews){
          imageRequest(i)
        }
      })
      .catch(err => {
        console.log(err);
      })

  }, [searchParams])



  return (
    <>
      <NewsPageContentImage src={props.image}/>

      <Container>
        <NewsPageContentTitle>{props.title}</NewsPageContentTitle>
        <NewsPageContentDate>{props.date}</NewsPageContentDate>
        
        <NewsPageWrap> 
          <Flex direction='column' width='100%' flex={1.8}>
            {checkText(props.text)}
          </Flex>


            <NewsPageListWrap>
              <Link to='/news'>
                Почитайте еще
              </Link>

              <NewsPageList style={{margin: '20px 0 0'}}>
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
                        Подребнее
                        <img src={require('../../../Assets/Images/home/news.svg')['default']} alt="" />
                      </HomeNewsItemBtn>
                    </Flex>
                  </HomeNewsItem>
                ))}

              </NewsPageList>

            </NewsPageListWrap> 
        </NewsPageWrap>
      
      </Container>
    </>
  )
}

export default NewsPageContent