import styled from 'styled-components';

export const AUD = styled.section`
    background: url(${require('../../../assets/Images/aboutUs/bg.jpg')}) 0 0 / cover;
    padding: 146px 0 190px;
    @media(max-width: 1020px){
        padding: 100px 0 90px;
        background: url(${require('../../../assets/Images/aboutUs/bgAdaptive.jpg')}) 0 0 / cover;
    }
`;

export const AUDWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1020px){
        flex-direction: column;
        text-align: center;
    }
`;

export const AUDInfo = styled.div`
    max-width: 820px;
`;

export const AUDInfoTitle = styled.h2`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #2C2C2C;
    span{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        line-height: 70px;
        text-transform: uppercase;
        color: #F48021;
    }
    @media(max-width: 520px){
        font-size: 40px;
        line-height: 40px;
        span{
            font-size: 40px;
            line-height: 40px;
        }
    }
`;

export const AUDInfoText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;
    margin: 20px 0 0;
    @media(max-width: 520px){
        font-size: 16px;
        line-height: 19px;
    }
`;

export const AUDDirector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 1020px){
        margin: 60px 0 0;
    }
    @media(max-width: 520px){
        margin: 20px 0 0;
    }
`;

export const AUDDirectorImage = styled.img`
    max-width: 500px;
    border-radius: 50%;
    width: 100%;
    min-width: 345px;
    @media(max-width: 520px){
        min-width: 295px;
    }
`;

export const AUDDirectorInfo = styled.div`
    max-width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const AUDDirectiorTitle = styled.h3`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    color: #4478BB;
    margin: 20px 0;
    @media(max-width: 520px){
        font-size: 24px;
        line-height: 40px;
        margin: 10px 0;
    }
`;

export const AUDDirectorText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;
    margin: 0 0 20px;
    @media(max-width: 520px){
        font-size: 20px;
        line-height: 23px;
        margin: 0 0 10px;
    }
`;

export const AUDDirectorIconWrap = styled.a`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    margin: 0 13px 0 0;
    :last-child{
        margin: 0;
    }
    img{
        width: 20px;
    }
`;
