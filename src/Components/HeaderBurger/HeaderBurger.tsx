import React, { useState } from 'react'
import { Flex } from '../../uikit/uikit';
import { HeaderAdaptive, HeaderBurgerImage, HeaderDDAdaptive, HeaderDDAdaptiveLink, HeaderDDAdaptiveLinks, HeaderDDAdaptiveSide } from '../Header/HeaderSC';
import HeaderLang from '../HeaderDropDowns/HeaderLang';

const HeaderBurger:React.FC = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)

    const Burger = require('../../Assets/Images/Header/burger.svg')['default']
    const BurgerClose = require('../../Assets/Images/Header/burgerClose.svg')['default']


  return (
    <HeaderAdaptive 
        onClick={(e) => { 
            e.stopPropagation()
            setShow1(false)
        }}
    >
        <HeaderBurgerImage src={show?BurgerClose:Burger} onClick={() => setShow(el => !el)}/>

        <HeaderDDAdaptive show={show}>
            <Flex align='flex-start' justify='space-between' width='100%'>
                <HeaderDDAdaptiveLinks>
                    <HeaderDDAdaptiveLink to='/market'>Рынки</HeaderDDAdaptiveLink>
                    <HeaderDDAdaptiveLink to='/news'>Новости</HeaderDDAdaptiveLink>
                    <HeaderDDAdaptiveLink to='/analitics'>Аналитика</HeaderDDAdaptiveLink>
                    <HeaderDDAdaptiveLink to='/listing'>Листинг</HeaderDDAdaptiveLink>
                    <HeaderDDAdaptiveLink to='/disclosure'>Раскрытие Информации</HeaderDDAdaptiveLink>
                    <HeaderDDAdaptiveLink to='/aboutUs'>О нас</HeaderDDAdaptiveLink>
                </HeaderDDAdaptiveLinks>
    
                <HeaderDDAdaptiveSide>
                    <HeaderLang burgerShow={show1} burgerSetShow={setShow1} adaptiveShow={true}/>
    
                    <a href="#" target='_blank'>
                        <img src={require('../../Assets/Images/footer/facebook.svg')['default']} alt="" />
                    </a>
    
                    <a href="#" target='_blank'>
                        <img src={require('../../Assets/Images/footer/twitter.svg')['default']} alt="" />
                    </a>
    
                    <a href="#" target='_blank'>
                        <img src={require('../../Assets/Images/footer/google.svg')['default']} alt="" />
                    </a>
    
                    <a href="#" target='_blank'>
                        <img src={require('../../Assets/Images/footer/in.svg')['default']} alt="" />
                    </a>
    
                </HeaderDDAdaptiveSide>
            </Flex>
        </HeaderDDAdaptive>
    </HeaderAdaptive>
  )
}

export default HeaderBurger