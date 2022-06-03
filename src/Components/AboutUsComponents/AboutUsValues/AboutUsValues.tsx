import React from 'react'
import { Container } from '../../../uikit/uikit'
import { AUVItem, AUVList, AUVSC, AUVTitle } from './AboutUsValuesSC'

const AboutUsValues:React.FC = () => {
  return (
    <AUVSC>
        <Container>
            <AUVTitle>
                Наши ценности
            </AUVTitle>

            <AUVList>

                <AUVItem>
                    <h1 className="title">
                        ДОБРОСОВЕСТНОЕ ОТНОШЕНИЕ
                    </h1>

                    <p className="text">
                        Проявления уважения ко всем
                    </p>
                    <p className="text">
                        Открытое общение
                    </p>
                    <p className="text mn-none">
                        Образцовая честность и этика
                    </p>
                </AUVItem>

                <AUVItem>
                    <h1 className="title">
                        РАСШИРЕНИЕ ОПЫТА
                    </h1>

                    <p className="text">
                        Быть экспертом своего дела
                    </p>
                    <p className="text">
                        Проявлять любопытство, задавать вопросы и постоянно учиться
                    </p>
                    <p className="text mn-none">
                        Прикладывать все усилия для того, чтобы преуспеть
                    </p>
                </AUVItem>

                <AUVItem>
                    <h1 className="title">
                        БЫТЬ КОМАНДНЫМ ИГРОКОМ
                    </h1>

                    <p className="text">
                        Доверять коллегам
                    </p>
                    <p className="text">
                        Сотрудничество, невзирая на границы
                    </p>
                    <p className="text mn-none">
                        Поиск разных мыслей и идей
                    </p>
                </AUVItem>
            </AUVList>
        </Container>
    </AUVSC>
  )
}

export default AboutUsValues