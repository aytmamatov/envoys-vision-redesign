import styled from "styled-components";


export const MarketPMMList = styled.ul`
    margin: 40px 0 10px 23px;
`

export const MarketPMMItem = styled.li`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #F48020;
    margin: 10px 0;
`


export const MarketCardsWrap = styled.section`
    height: 400px;
    width: 100%;
    padding: 20px 10px;
    background: #FFFFFF;
    box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
    border-radius: 8px;
`

export const MarketCardsTitle = styled.section`
    width: 100%;
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #4478BB;
`

export const MarketCards = styled.ul`
    margin: 35px 0 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media(max-width: 582px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 370px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const MarketCard = styled.li`
    height: 80px;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: #4478BB;
    border-radius: 8px;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
`


