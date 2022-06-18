import React, { useState } from 'react';
import { Flex } from '../../../uikit/uikit';
import DisclosureSideBarAdaptive from '../DisclosureSideBarAdaptive/DisclosureSideBarAdaptive';
import {
  DisclosureContent, DisclosureItem, DisclosureLink, DisclosureList, DisclosureTitle,
} from './DisclosureMembersSC';

const DisclosureMembers:React.FC = () => {
  const [componies, setComponies] = useState([
    {
      name: 'Общество с ограниченной ответственностью "Роял Пюр Голд"',
      site: 'https://rpg.kg/',
    },
    {
      name: 'Общество с ограниченной ответственностью "Омега Капитал"',
      site: 'https://omegacapital.kg/',
    },
    {
      name: 'Общество с ограниченной ответственностью "Аскоинвест"',
      site: '',
    },
    {
      name: 'Общество с ограниченной ответственностью Финансово-Консалтинговая компания "АТО-финанс"',
      site: '',
    },
    {
      name: 'Общество с ограниченной ответственностью финансово-инвестиционная компания "Си Эй Кэпитал"',
      site: '',
    },
  ]);

  return (
    <DisclosureContent>
      <Flex width="100%" margin="0 0 35px">
        <DisclosureSideBarAdaptive />
      </Flex>

      <DisclosureList>
        <DisclosureItem>
          <DisclosureTitle>
            Название
          </DisclosureTitle>

          <DisclosureTitle className="smaller">
            Сайт
          </DisclosureTitle>
        </DisclosureItem>

        {componies.map((el, index) => (
          <DisclosureItem key={index}>
            <DisclosureTitle>{el.name}</DisclosureTitle>
            <DisclosureLink href={el.site} target="_blank">
              <img src={require('../../../assets/Images/Disclosure/WebSite.svg').default} alt="" />
              <span>
                Перейти на сайт
              </span>
            </DisclosureLink>
          </DisclosureItem>
        ))}
      </DisclosureList>

    </DisclosureContent>
  );
};

export default DisclosureMembers;
