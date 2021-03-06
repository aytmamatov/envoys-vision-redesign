import React, { useState } from 'react';
import { HeaderBtn, HeaderDDlang, HeaderLangBtn } from '../Header/HeaderSC';
import { changeLang } from '../../Translater/i18next';

type Props = {
  burgerShow: boolean;
  burgerSetShow: React.Dispatch<React.SetStateAction<boolean>>;
  adaptiveShow: boolean;
}

const HeaderLang:React.FC<Props> = ({
  burgerShow,
  burgerSetShow,
  adaptiveShow,
}) => {
  const [activeLang, setActiveLang] = useState('Russian');

  const DD = require('../../assets/Images/Header/header.svg');

  function changeLangShow(e:React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    burgerSetShow((val) => !val);
  }

  function changeLangHandler(lang: string) {
    setActiveLang(lang);
    if (lang === 'Russia') changeLang('ru');
    if (lang === 'English') changeLang('en');
    if (lang === '中国人') changeLang('ch');
  }

  return (
    <HeaderBtn
      className={`${adaptiveShow ? 'show' : ''}`}
      onClick={(e) => changeLangShow(e)}
    >
      {activeLang}
      <img src={DD} alt="dd" />

      <HeaderDDlang show={burgerShow}>
        <HeaderLangBtn onClick={() => changeLangHandler('Russia')}>Русский</HeaderLangBtn>
        <HeaderLangBtn onClick={() => changeLangHandler('English')}>English</HeaderLangBtn>
        <HeaderLangBtn onClick={() => changeLangHandler('中国人')}>中国人</HeaderLangBtn>
      </HeaderDDlang>
    </HeaderBtn>
  );
};

export default HeaderLang;
