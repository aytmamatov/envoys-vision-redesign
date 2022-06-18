import React, { useState } from 'react';
import { HeaderDD, HeaderLinkDD, HeaderNavLink } from '../Header/HeaderSC';

const HeaderDisclosure:React.FC = () => {
  const [show, setShow] = useState(false);
  const DD = require('../../assets/Images/Header/DD.svg');

  return (
    <HeaderNavLink
      to="/disclosure"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      Раскрытие информации

      <img src={DD} alt="" />

      <HeaderDD show={show}>
        <HeaderLinkDD to="/disclosure?param=members">Участники</HeaderLinkDD>
        <HeaderLinkDD to="/disclosure?param=rules">Правила</HeaderLinkDD>
        <HeaderLinkDD to="/disclosure?param=legislationKR">Законодательство КР</HeaderLinkDD>
        <HeaderLinkDD to="/disclosure?param=disclosure">Раскрытия информации</HeaderLinkDD>
      </HeaderDD>
    </HeaderNavLink>
  );
};

export default HeaderDisclosure;
