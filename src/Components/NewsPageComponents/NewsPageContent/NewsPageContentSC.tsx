import styled from "styled-components"; 

export const NewsPageContentImage = styled.img`
    width: 100%;
    height: 749px;
    object-fit: cover;
`

export const NewsPageContentTitle = styled.h1`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #2C2C2C;

    margin: 100px 0 20px;
    @media(max-width: 667px){
        font-size: 36px;
        line-height: 40px;
    }
`

export const NewsPageContentDate = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #F48020;
    margin: 0 0 60px;
`

export const NewsPageContentText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;
    max-width: 692px;
`

export const NewsPageWrap = styled.div`
    display: flex;
    
    @media(max-width: 1020px){
        flex-direction: column;
    }
`

export const NewsPageListWrap = styled.div`
    flex: .5;

    a{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #2C2C2C;
        margin: 0 0 30px;
    }

    @media(max-width: 1020px){
        margin: 100px 0 0;
    }
`

export const NewsPageList = styled.ul`
    display: flex;

    @media(min-width: 1020px){
        li:last-child{
            display: none;
        }
    }
`