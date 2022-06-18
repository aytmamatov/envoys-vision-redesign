import React from 'react';
import DRCDD from '../DRCDD/DRCDD';
import DRCWrap from './DRCListingSC';

const DRCListing:React.FC = () => (
  <DRCWrap>
    <DRCDD
      title="Процедура листинга"
      insideTitle="Правила листинга ценных бумаг"
      insideTitlePath={require('../../../../assets/docs/Disclosure/Rules/Listing/Правила листинга ценных бумаг.pdf')}
      paths={[
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №1. Договор листинга.docx'),
          name: 'Приложение №1. Договор листинга',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №2. Заявка на листинг.docx'),
          name: 'Приложение №2. Заявка на листинг',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №5. Заключение Листингового комитета Биржи.docx'),
          name: 'Приложение №5. Заключение Листингового комитета Биржи',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №7. Листинговый проспект.docx'),
          name: 'Приложение №7. Листинговый проспект',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №8. Перечень иностранных фондовых бирж.docx'),
          name: 'Приложение №8. Перечень иностранных фондовых бирж',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №9. Бюллетень для голосования.docx'),
          name: 'Приложение №9. Бюллетень для голосования',
        },
      ]}
    />

    <DRCDD
      title="Листинговые требования"
      insideTitle="Листинговые требования"
      insideTitlePath={require('../../../../assets/docs/Disclosure/Rules/Listing/Правила листинга ценных бумаг.pdf')}
      paths={[
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №3. Перечень документов для листинга отечественных компаний.docx'),
          name: 'Приложение №3. Перечень документов для листинга отечественных компаний',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №4. Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга.pdf'),
          name: 'Приложение №4. Перечень документов, предоставляемых Оригинатором и Эмитентом для прохождения процедуры листинга',
        },
        {
          path: require('../../../../assets/docs/Disclosure/Rules/Listing/Приложение №6. Требования по информации относительно целей поддержания листинга.pdf'),
          name: 'Приложение №6. Требования по информации относительно целей поддержания листинга',
        },
      ]}
    />

  </DRCWrap>
);

export default DRCListing;
