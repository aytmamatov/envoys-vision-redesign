import styled from 'styled-components';

export const BannerSC = styled.section`
    background: url(${require('../../../assets/Images/home/bannerBg.jpg').default}) 0 0 / cover;
    padding: 100px 0;
    @media(max-width: 1020px){
        background: url(${require('../../../assets/Images/home/bannerBg2.jpg').default}) 0 0 / cover;
    }
    @media(max-width: 500px){
        background: url(${require('../../../assets/Images/home/bannerBg3.jpg').default}) 0 0 / cover;
    }
`;

export const BannerWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1020px){
        flex-direction: column;
    }
`;

export const BannerInfo = styled.div`
    max-width: 736px;
    @media(max-width: 1020px){
        margin: 0 0 50px;
        text-align: center;
    }
`;

export const BannerTitle = styled.h1`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #2C2C2C;
    margin: 0 0 20px;
    span{
        color: #F48020;
    }
    @media(max-width: 500px){
        font-size: 40px;
        line-height: 40px;
    }
`;

export const BannerText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;
    margin: 0 0 20px;
    @media(max-width: 500px){
        display: none;
    }
`;

export const BannerImage = styled.img`
    max-width: 475px;
    width: 100%;
`;
