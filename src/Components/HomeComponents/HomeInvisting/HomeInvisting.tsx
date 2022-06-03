import React from 'react'
import { Button, Container } from '../../../uikit/uikit'
import HomeInvistingAdaptive from '../HomeInvistingAdaptive/HomeInvisting'
import { HomeInvisting2Text, HomeInvisting2Title, HomeInvistingItem, HomeInvistingOption, HomeInvistingOptionText, HomeInvistingSC, HomeInvistingText, HomeInvistingTitle, HomeInvistingWrap } from './HomeInvistingSC'

const HomeInvisting:React.FC = () => {
    const [options, setOptions] = React.useState(0)


    function checkItem(){
        if(options === 0){
            return (<></>)
        }else if(options === 1){
            return (
                <>
                    <HomeInvisting2Title>
                        Под инвестированием в ценные бумаги понимается вложение средств в различные активы – от объектов недвижимости и бизнес-проектов до ценных бумаг и криптовалют.
                    </HomeInvisting2Title>
                    <HomeInvisting2Text>
                        Каждая ценная бумага удостоверяет право ее владельца на часть имущественных активов либо подтверждает факт займа. Ценные бумаги выпускаются в стандартном бумажном виде или в электронной форме.
                    </HomeInvisting2Text>
                </>
            )
        }else{
            return (
                <>
                    <HomeInvisting2Title>
                        Сам по себе вид ценной бумаги уже может свидетельствовать о потенциальном доходе. Среди наиболее распространенных финансовых инструментов, представленных на рынке, можно выделить
                    </HomeInvisting2Title>
                    <HomeInvisting2Text>
                        Возможно и инвестирование в ценные бумаги производного характера (опционы, фьючерсы и свопы). Не все виды финансовых инструментов доступны на фондовом рынке. Например, инвестор может вложить деньги в вексель, однако оборот такого документа происходит вне фондовых бирж.
                    </HomeInvisting2Text>
                </>
            )
        }
    }

  return (
    <HomeInvistingSC>
        <Container>
            <HomeInvistingTitle>
                Envoys расшифровывает технические тренды
            </HomeInvistingTitle>

            <HomeInvistingText>
                Откройте для себя финансовые рынки
            </HomeInvistingText>

            <Button>
                Больше новостей
            </Button>


            <HomeInvistingWrap>
                <HomeInvistingItem>
                    <HomeInvistingOption 
                        className={options===1?'active':''} 
                        onMouseEnter ={() => setOptions(1)}
                        onMouseLeave ={() => setOptions(0)}
                        
                        >

                        <HomeInvistingOptionText>
                            ЧТО ТАКОЕ ИНВЕСТИРОВАНИЕ В ЦЕННЫЕ БУМАГИ
                        </HomeInvistingOptionText>
                    </HomeInvistingOption>
                    <HomeInvistingOption 
                        className={options===2?'active':''} 
                        onMouseEnter ={() => setOptions(2)}
                        onMouseLeave ={() => setOptions(0)}
                        >

                        <HomeInvistingOptionText>
                            ВИДЫ ИНВЕСТИРОВАНИЯ
                        </HomeInvistingOptionText>
                    </HomeInvistingOption>
                </HomeInvistingItem>

                <HomeInvistingItem className={options===0?'bg-none':''}>
                    {checkItem()}
                </HomeInvistingItem>
            </HomeInvistingWrap>

            <HomeInvistingAdaptive/>
        </Container>
    </HomeInvistingSC>
  )
}

export default HomeInvisting