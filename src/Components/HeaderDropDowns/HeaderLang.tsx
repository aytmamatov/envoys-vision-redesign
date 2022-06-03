import React, { useState } from 'react'
import { HeaderBtn, HeaderDDlang, HeaderLangBtn } from '../Header/HeaderSC';

type Props = {
  burgerShow: boolean;
  burgerSetShow: React.Dispatch<React.SetStateAction<boolean>>;
  adaptiveShow: boolean;
}


const HeaderLang:React.FC<Props> = (props) => {
  const [lang, setLang] = useState('Русский')
  const DD = require('../../Assets/Images/Header/header.svg')['default']

  function changeLang(e:React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation()
    props.burgerSetShow(val => !val)
  }

  return (
    <HeaderBtn 
      className={`${props.adaptiveShow?'show':''}`} 
      onClick={(e) => changeLang(e)}
      >
        {lang}
        <img src={DD} alt="dd" />
        

        <HeaderDDlang show={props.burgerShow}>
            <HeaderLangBtn onClick={() => setLang('Русский')}>Русский</HeaderLangBtn>
            <HeaderLangBtn onClick={() => setLang('English')}>English</HeaderLangBtn>
            <HeaderLangBtn onClick={() => setLang('中国人')}>中国人</HeaderLangBtn>
        </HeaderDDlang>
    </HeaderBtn>
  )
}

export default HeaderLang