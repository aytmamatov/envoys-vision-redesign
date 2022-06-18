import React from 'react';
import DRCDD from '../DRCDD/DRCDD';
import { DRCWrap } from '../DRCListing/DRCListingSC';

const DRCBargaining:React.FC = () => (
  <DRCWrap>
    <DRCDD
      title="Корпоративные ценные бумаги"
      insideTitle="Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами"
      insideTitlePath={require('../../../../assets/docs/Disclosure/Rules/Инструкция о порядке взаиморасчетов по операциям с корпоративными ценными бумагами.pdf')}
      paths={[]}
    />
    <DRCDD
      title="Правила биржевой торговли"
      insideTitle="Правила биржевой торговли"
      insideTitlePath={require('../../../../assets/docs/Disclosure/Rules/market/Правила биржевой торговли.pdf')}
      paths={[
        {
          name: 'Приложение №1. Доверенность',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №1. Доверенность.docx'),
        },
        {
          name: 'Приложение №2. Порядок присвоения персонального кода',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №2. Порядок присвоения персонального кода.pdf'),
        },
        {
          name: 'Приложение №3. Заявление на допуск ЦБ к торговой площадке',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №3. Заявление на допуск ЦБ к торговой площадке.docx'),
        },
        {
          name: 'Приложение №4. Биржевой контракт',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №4. Биржевой контракт.pdf'),
        },
        {
          name: 'Приложение №5. Биржевое свидетельство',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №5. Биржевое свидетельство.pdf'),
        },
        {
          name: 'Приложение №6. Перечень документов для регистрации',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №6. Перечень документов для регистрации.pdf'),
        },
        {
          name: 'Приложение №7. Заявление на регистрацию',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №7. Заявление на регистрацию.docx'),
        },
        {
          name: 'Приложение №7. Заявление на регистрацию',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №7. Заявление на регистрацию.docx'),
        },
        {
          name: 'Приложение №8. Анкета участника торгов',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №8. Анкета участника торгов.docx'),
        },
        {
          name: 'Приложение №9. Договор об участии в торгах',
          path: require('../../../../assets/docs/Disclosure/Rules/market/Приложение №9. Договор об участии в торгах.docx'),
        },

      ]}
    />
  </DRCWrap>
);

export default DRCBargaining;
