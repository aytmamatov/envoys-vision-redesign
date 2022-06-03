import React from 'react'
import { Container, Flex } from '../../../uikit/uikit'
import { OurTeamItem, OurTeamItemImage, OurTeamList, OurTeamSC, OurTeamTitle, OutTeamItemLink, OutTeamItemLinkImag, OutTeamItemText, OutTeamItemTitle } from './OurTeamSC'

const OurTeam:React.FC = () => {
  return (
    <OurTeamSC>
        <Container>
            <OurTeamTitle>
                Наша команда
            </OurTeamTitle>

            <OurTeamList>

                <OurTeamItem>
                    <OurTeamItemImage src={require('../../../Assets/Images/home/team/user1.png')}/>
                    <OutTeamItemTitle>
                        Екатерина Иванова
                    </OutTeamItemTitle>
                    <OutTeamItemText>
                        Product Engineer
                    </OutTeamItemText>

                    <Flex margin='20px auto 0'>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/in.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/twitter.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/github.svg')['default']}/>
                        </OutTeamItemLink>
                    </Flex>
                </OurTeamItem>

                <OurTeamItem>
                    <OurTeamItemImage src={require('../../../Assets/Images/home/team/user2.png')}/>
                    <OutTeamItemTitle>
                        Брюс Бэннер
                    </OutTeamItemTitle>
                    <OutTeamItemText>
                        Product Engineer
                    </OutTeamItemText>

                    <Flex margin='20px auto 0'>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/in.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/twitter.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/github.svg')['default']}/>
                        </OutTeamItemLink>
                    </Flex>
                </OurTeamItem>

                <OurTeamItem>
                    <OurTeamItemImage src={require('../../../Assets/Images/home/team/user3.png')}/>
                    <OutTeamItemTitle>
                        Брюс Уэйн
                    </OutTeamItemTitle>
                    <OutTeamItemText>
                        Product Engineer
                    </OutTeamItemText>

                    <Flex margin='20px auto 0'>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/in.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/twitter.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/github.svg')['default']}/>
                        </OutTeamItemLink>
                    </Flex>
                </OurTeamItem>

                <OurTeamItem>
                    <OurTeamItemImage src={require('../../../Assets/Images/home/team/user4.png')}/>
                    <OutTeamItemTitle>
                        Мэри-Джейн Уотсон
                    </OutTeamItemTitle>
                    <OutTeamItemText>
                        Product Engineer
                    </OutTeamItemText>

                    <Flex margin='20px auto 0'>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/in.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/twitter.svg')['default']}/>
                        </OutTeamItemLink>
                        <OutTeamItemLink href='#'>
                            <OutTeamItemLinkImag src={require('../../../Assets/Images/footer/github.svg')['default']}/>
                        </OutTeamItemLink>
                    </Flex>
                </OurTeamItem>
            
            </OurTeamList>
        </Container>
    </OurTeamSC>
  )
}

export default OurTeam