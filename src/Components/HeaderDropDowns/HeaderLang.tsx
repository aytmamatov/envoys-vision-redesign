import React, { useState } from 'react';
import { HeaderBtn, HeaderDDlang, HeaderLangBtn } from '../Header/HeaderSC';

type Props = {
  burgerShow: boolean;
  burgerSetShow: React.Dispatch<React.SetStateAction<boolean>>;
  adaptiveShow: boolean;
}

const HeaderLang:React.FC<Props> = ({ burgerShow, burgerSetShow, adaptiveShow }) => {
  const [lang, setLang] = useState('Русский');
  const DD = require('../../assets/Images/Header/header.svg');

  function changeLang(e:React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    burgerSetShow((val) => !val);
  }

  return (
    <HeaderBtn
      className={`${adaptiveShow ? 'show' : ''}`}
      onClick={(e) => changeLang(e)}
    >
      {lang}
      <img src={DD} alt="dd" />

      <HeaderDDlang show={burgerShow}>
        <HeaderLangBtn onClick={() => setLang('Русский')}>Русский</HeaderLangBtn>
        <HeaderLangBtn onClick={() => setLang('English')}>English</HeaderLangBtn>
        <HeaderLangBtn onClick={() => setLang('中国人')}>中国人</HeaderLangBtn>
      </HeaderDDlang>
    </HeaderBtn>
  );
};

export default HeaderLang;
