import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { NewsRequestData } from '../../Components/HomeComponents/HomeNews/HomeNews'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {  storage } from '../../fireBaseConfig/Config'
import NewsPageContent from '../../Components/NewsPageComponents/NewsPageContent/NewsPageContent';


const NewsPage:React.FC = () => {
    const [newsInfo, setNewsInfo] = useState<NewsRequestData>()

    const [searchParams] = useSearchParams()

    const nav = useNavigate()


    React.useEffect(() => {
        let path = searchParams.get('key')
        if(path){
            axios.get<NewsRequestData>(`https://envoys-vision-news-default-rtdb.firebaseio.com/news/${path}.json`)
                .then(res => {
                    let news: NewsRequestData = res.data
                    const storage1 = storage
                    getDownloadURL(ref(storage1, `gs://envoys-vision-news.appspot.com/news/${news.title}.jpg`))
                        .then((url) => {
                            news.image = url
                            setNewsInfo(news)
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch(err => {
                    console.log(err);
                })
        }else nav('/news')
    }, [searchParams])



    
    return (
        <NewsPageContent 
            date={newsInfo?.date} 
            link={newsInfo?.link} 
            text={newsInfo?.text}
            title={newsInfo?.title}
            image={newsInfo?.image}
        />
    )
}

export default NewsPage