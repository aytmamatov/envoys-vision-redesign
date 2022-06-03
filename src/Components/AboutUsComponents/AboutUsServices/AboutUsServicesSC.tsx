import styled from "styled-components";

export const AUSSC = styled.section`
    margin: 0 0 100px;
` 

export const AUSTitle = styled.h2`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #2C2C2C;
    margin: 0 0 160px;
    span{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        line-height: 70px;
        text-transform: uppercase;
        color: #F48020;
    }
    @media(max-width: 1020px){
        margin: 0 0 60px;
        font-size: 36px;
        line-height: 40px;
        span{
            font-size: 36px;
            line-height: 40px;
        }
    }
    @media(max-width: 500px){
        font-size: 24px;
        line-height: 30px;
    }
`

export const AUSSwiper = styled.div`
    padding: 0 10px;
`

export const AUSSlideImg = styled.img`
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    min-width: 340px;
    height: 355px;
    @media(max-width: 400px){
        min-width: 300px;
    }
`

export const AUSSlideName = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: right;
    color: #045599;
    margin: 30px 0 0;
`