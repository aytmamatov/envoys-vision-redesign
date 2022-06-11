import styled from "styled-components";

interface Margin{
    margin: string;
    width: string;
}

export const MarketTitle = styled.h1<Margin>`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #4478BB;
    max-width: ${props => props.width};
    margin: ${props => props.margin};

    @media(max-width: 782px){
        font-size: 32px;
        line-height: 40px;
    }

    @media(max-width: 370px){
        font-size: 26px;
        line-height: 32px;
    }
`

export const MarketText = styled.p<Margin>`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;
    max-width: ${props => props.width};
    margin: ${props => props.margin};
    @media(max-width: 782px){
        font-size: 20px;
        line-height: 19px;
    }
`

export const MarketImages = styled.img`
    width: 100%;
    border-radius: 8px;
`

export const MarketPreTitle = styled.h2<Margin>`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    color: #F48020;
    max-width: 895px;
    max-width: ${props => props.width};
    margin: ${props => props.margin};

    @media(max-width: 782px){
        font-size: 20px;
        line-height: 23px;
    }
`

export const MarketList = styled.ul`
    margin: 0 0 50px;
`

export const MarketItemTitle = styled.li`
    list-style: none;
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #F48020;
    margin: 0 0 30px;
` 

export const MarketItem = styled.li`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
    margin: 10px 0 10px 22px;
`


export const MarketCards = styled.ul`
    list-style: none;
`

export const MarketCard = styled.li`
    padding: 20px;
    max-width: 580px;

    background: #FFFFFF;
    box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
    border-radius: 8px;
    margin: 20px 0;

    h1{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
        text-transform: uppercase;
        color: #045599;
        margin: 0 0 15px;
    }
    p{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
        color: #F48020;
    }
    @media(max-width: 782px){
        h1{
            font-size: 24px;
            line-height: 40px;
        }
        p{
            font-size: 16px;
            line-height: 19px;
        }
    }
`


export const MarketList2 = styled(MarketList)`

`

export const MarketItemTitle2 = styled(MarketItemTitle)`
    list-style: none;
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #F48020;
    margin: 0 0 30px;
    max-width: 500px;
` 

export const MarketItem2 = styled(MarketItem)`
    font-family: 'Roboto Flex';
    max-width: 630px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7A7A7A;
    margin: 10px 0 10px 22px;
`

export const MICL = styled(MarketList)`
    max-width: 600px;
`

export const MICList = styled.ul`
    margin: 0 0 0 20px;
`

export const MICItem = styled.li`
    font-family: 'Roboto Flex';
    max-width: 630px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin: 10px 0;
`

interface PropsImage {
    image: string;
}


export const MICImageList = styled.ul<PropsImage>`
    background: url(${props => props.image}) 0 0 / cover;
    border-radius: 8px;
    padding: 20px 20px 20px 40px;
`

export const MICImageItemTitle = styled.li`
    font-family: 'Roboto Flex';
    max-width: 630px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin: 0 0 20px 0;
    color: #fff;
`

export const MICImageItem = styled.li`
    font-family: 'Roboto Flex';
    max-width: 630px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    margin: 10px 0;
    color: #fff;
`


