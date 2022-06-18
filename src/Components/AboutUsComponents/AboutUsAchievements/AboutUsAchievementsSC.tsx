import styled from 'styled-components';

export const AUASC = styled.section`
    position: relative;
    margin: 180px 0;
`;

export const AUAWrap = styled.div`
    background: #fff;
    box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
    border-radius: 8px;
    display: flex;
    padding: 60px;
    width: 100%;
    height: 680px;
    @media(max-width: 540px){
        padding: 60px 15px;
    }
`;

export const AUAInfo = styled.div`
    flex: 1;
    width: 50%;
`;

export const AUAInfo2 = styled.div`
    flex: 1;
    @media(max-width: 1020px){
        display: flex;
        flex: 0;
    }
`;

export const AUAInfoInside = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
`;

export const AUADate = styled.p`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    color: #F48020;
    
`;

export const AUAText = styled.p`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    color: #4478BB;
    position: relative;
    z-index: 1;
    /* margin: 160px 0 170px; */
    @media(max-width: 540px){
        font-size: 24px;
        line-height: 30px;
    }
`;

export const AUANum = styled.h1`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 700;
    font-size: 386px;
    line-height: 40px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    top: 123px;
    color: rgba(255, 159, 41, 0.1);
    @media(max-width: 540px){
        font-size: 365px;
    }
`;

export const AUAIamge = styled.img`
    width: 100%;
    max-width: 50%;
    height: 869px;
    position: absolute;
    border-radius: 8px 0px 0px 8px;
    right: 0;
    top: -100px;
    transition: .3s;
    @media(max-width: 1020px){
        display: none;
    }
`;
