import styled from 'styled-components';

export const AUVSC = styled.section`
    padding: 80px 0 200px;
    background: #F9F9F9;
`;

export const AUVTitle = styled.h1`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #4478BB;
    margin: 0 0 50px;
    @media(max-width: 1418px){
        font-size: 36px;
        line-height: 40px;
    }
`;

export const AUVList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 1418px){
        flex-wrap: wrap;
        justify-content: center;
    }
    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const AUVItem = styled.li`
    max-width: 460px;
    min-width: 385px;
    margin: 0 20px 0 0;
    flex: 1;
    padding: 40px;
    height: 400px;
    border: 10px solid rgba(138, 179, 255, 0.3);
    :last-child{
        margin: 0;
    }
    h1.title{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
        text-transform: uppercase;
        color: #F48020;
        margin: 0 0 40px;
    }
    p.text{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #7A7A7A;
        margin: 0 0 30px;
    }
    p.mn-none{
        margin: 0;
    }
    @media(max-width: 1214px){
        :last-child{
            margin: 20px 0 0;
        }
    }
    @media(max-width: 1020px){
        margin: 0 0 20px;
        :last-child{
            margin: 0;
        }
    }

    @media(max-width: 450px){
        padding: 70px 30px 60px 30px;
        min-width: 100%;
        h1.title{
            font-size: 24px;
            line-height: 30px;
        }
        p.text{
            font-size: 16px;
            line-height: 19px;
        }
    }
`;
