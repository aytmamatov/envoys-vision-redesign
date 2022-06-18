import styled from 'styled-components';
import { Button } from '../../../uikit/uikit';

export const HomeNewsSC = styled.section`
    margin: 0 0 100px;
`;

export const HomeNewsTitle = styled.h2`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    color: #045599;
    margin: 0 0 85px;
    @media(max-width: 900px){
        margin: 0 0 65px;
    }
    @media(max-width: 760px){
        margin: 0 0 20px;
        font-size: 20px;
    }
`;

export const HomeNewsBtn1 = styled(Button)`
    @media(max-width: 760px){
        display: none;
    }
`;

export const HomeNewsBtn2 = styled(Button)`
    margin: 50px 0 0;
    @media(min-width: 760px){
        display: none;
    }
`;

export const HomeNewsUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

export const HomeNewsItem = styled.li`
    margin: 0 20px 0 0;
    flex: 1;
    height: 552px;
    display: flex;
    flex-direction: column;
    :last-child{
        margin: 0;
    }

    @media(max-width: 900px){
        :nth-child(2){
            margin: 0;
        }
        :nth-child(3){
            display: none;
        }
        :nth-child(4){
            display: none;
        }
    }
    @media(max-width: 450px){
        :nth-child(1){
            margin: 0
        }
        :nth-child(2){
            display: none;
        }
    }
`;

export const HomeNewsImage = styled.img`
    width: 100%;
    border: 8px;
`;

export const HomeNewsSmallText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
    margin: 10px 0;
`;

export const HomeNewsItemTitle = styled.h3`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #2C2C2C;
`;

export const HomeNewsItemDate = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #F48020;
    margin: 0 8px 0 0;
`;

export const HomeNewsItemBtn = styled.button`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2C2C2C;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 0 0 8px;
    background: none;
    display: flex;
    align-items: center;
    img{
        width: 32px;
        margin: 0 0 0 5px;
    }
`;

export const HomeNewsItemBtnImage = styled.img`
`;
