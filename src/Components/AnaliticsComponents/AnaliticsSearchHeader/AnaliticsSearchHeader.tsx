import React from 'react'
import SearchComponent from '../../SearchComponent/SearchComponent'
import { ASHDate, ASHSearcAndSidebar, ASHSlide, ASHSwiper, ASHWrap } from './AnaliticsSearchHeaderSC'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css';
import AnaliticsAdaptiveSidebar from '../AnaliticsAdaptiveSidebar/AnaliticsAdaptiveSidebar';
import { Flex } from '../../../uikit/uikit';

const AnaliticsSearchHeader:React.FC = () => {

    const [dates, setDates] = React.useState(['Пн, 1 май', 'Вт, 2 май', 'Ср, 3 май', 'Чт, 4 май', 'Пт, 5 май', 'Сб, 6 май', 'Сб, 6 май'])
    const [date, setDate] = React.useState('')

    // React.useEffect(() => {
    //     let getDateNow = new Date()
    //     let dateNow: string = ''
    //     let ready: string[] = []
    //     for(let i=getDateNow.getDay()-3; i <= getDateNow.getDay()+3; i++){
    //         if(i === -3 || i == 8) dateNow += 'Чт, '
    //         if(i === -2 || i == 9) dateNow += 'Пт, '
    //         if(i === -1 || i == 10) dateNow += 'Вс, '
    //         if(i === 1) dateNow += 'Пн, '
    //         if(i === 2) dateNow += 'Вт, '
    //         if(i === 3) dateNow += 'Ср, '
    //         if(i === 4) dateNow += 'Чт, '
    //         if(i === 5) dateNow += 'Пн, '
    //         if(i === 6) dateNow += 'Сб, '
    //         if(i === 0 || i === 7) dateNow += 'Вс, '

    //         ready.push(dateNow)
    //         dateNow = ''    
    //     }
    // }, [])
    
  return (
    <ASHWrap>
        <Flex>
            <ASHSwiper>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={7}
                    modules={[Navigation]}
                    navigation
                    loop
                    breakpoints= {{
                        320: {
                            slidesPerView: 1,
                        },
                        497: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1100: {
                            slidesPerView: 7,
                        }}
                    }>
                    {dates.map((el, index) => (
                        <SwiperSlide key={index}>
                            <ASHSlide>
                                <p>{el}</p>
                            </ASHSlide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ASHSwiper>
    
            
            <ASHDate 
                placeholder='Выберите дату'
                type='date' 
                value={'Выберите дату'}
                required
                onChange={(e) => setDate(e.target.value)}
            />
        </Flex>

        <ASHSearcAndSidebar>
            <SearchComponent 
                className='calendar' 
                width='460px' 
                placeholder='Поиск (По коду или названию компании)'/>

            <AnaliticsAdaptiveSidebar/>
        </ASHSearcAndSidebar>
    </ASHWrap>
  )
}

export default AnaliticsSearchHeader