import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Flex } from '../../../uikit/uikit';
import { TableSC, TableWrap } from './HomeReportSC';

const HomeReport:React.FC = () => {
  const [tableInfo, setTableInfo] = React.useState([
    [
      'KMOT.P',
      'ОАО «Ками моторс»',
      'KG0301222517',
      'Привелигированные акции',
      '0',
      '0',
      '137',
      '2512',
      'Нелистинг',
    ],
  ]);

  return (
    <TableSC>
      <Container>
        <TableWrap>
          <table>
            <tr>
              <th className="first">Наименование эмитента</th>
              <th>Государственный регистрационный номер</th>
              <th>Вид ценной бумаги</th>
              <th>
                {' '}
                ASK
                <br />
                {' '}
                (приказы на покупку)
                {' '}
              </th>
              <th>
                {' '}
                BID
                <br />
                {' '}
                (приказы на продажу)
                {' '}
              </th>
              <th>Листинг/нелистинг</th>
            </tr>

            <tr className="preHeader">
              <td className="first small">Тикеры</td>
              <td />
              <td />
              <td className="half small-y">Количество</td>
              <td className="half small-y">Цена</td>
              <td className="half small-y">Количество</td>
              <td className="half small-y">Цена</td>
              <td />
            </tr>

            <tr>
              <td className="first">
                <span>KMOT.P</span>
                ОАО «Ками моторс»
              </td>
              <td className="number">KG0301222517</td>
              <td>Привелигированные акции</td>
              <td className="half">0</td>
              <td className="half">0</td>
              <td className="half">137</td>
              <td className="half">2512</td>
              <td>Нелистинг</td>
            </tr>

          </table>
        </TableWrap>
      </Container>
    </TableSC>
  );
};

export default HomeReport;
