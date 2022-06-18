import React from 'react';
import { Button, Container } from '../../../uikit/uikit';
import {
  HomeInvistingWrap2, HomeInvistingOption2, HomeInvistingOptionText, HomeInvistingItem2, HomeInvisting2Title, HomeInvisting2Text,
} from '../HomeInvisting/HomeInvistingSC';

const HomeInvistingAdaptive:React.FC = () => {
  const [options1, setOptions1] = React.useState(false);
  const [options2, setOptions2] = React.useState(false);

  return (
    <HomeInvistingWrap2>
      <>
        <HomeInvistingOption2
          onMouseEnter={() => setOptions1(true)}
          onMouseLeave={() => setOptions1(false)}
        >
          <HomeInvistingOptionText>
            ЧТО ТАКОЕ ИНВЕСТИРОВАНИЕ В ЦЕННЫЕ БУМАГИ
          </HomeInvistingOptionText>
        </HomeInvistingOption2>

        <HomeInvistingItem2 show={options1}>
          <HomeInvisting2Title>
            Под инвестированием в ценные бумаги понимается вложение средств в различные активы – от объектов недвижимости и бизнес-проектов до ценных бумаг и криптовалют.
          </HomeInvisting2Title>
          <HomeInvisting2Text>
            Каждая ценная бумага удостоверяет право ее владельца на часть имущественных активов либо подтверждает факт займа. Ценные бумаги выпускаются в стандартном бумажном виде или в электронной форме.
          </HomeInvisting2Text>
        </HomeInvistingItem2>
      </>

      <>
        <HomeInvistingOption2
          onMouseEnter={() => setOptions2(true)}
          onMouseLeave={() => setOptions2(false)}
        >
          <HomeInvistingOptionText>
            ВИДЫ ИНВЕСТИРОВАНИЯ
          </HomeInvistingOptionText>
        </HomeInvistingOption2>

        <HomeInvistingItem2 show={options2}>
          <HomeInvisting2Title>
            Сам по себе вид ценной бумаги уже может свидетельствовать о потенциальном доходе. Среди наиболее распространенных финансовых инструментов, представленных на рынке, можно выделить
          </HomeInvisting2Title>
          <HomeInvisting2Text>
            Возможно и инвестирование в ценные бумаги производного характера (опционы, фьючерсы и свопы). Не все виды финансовых инструментов доступны на фондовом рынке. Например, инвестор может вложить деньги в вексель, однако оборот такого документа происходит вне фондовых бирж.
          </HomeInvisting2Text>
        </HomeInvistingItem2>

      </>

    </HomeInvistingWrap2>
  );
};

export default HomeInvistingAdaptive;
