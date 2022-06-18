import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterSC = styled.footer`
    padding: 50px 0 70px;
    background: #FCFCFC;
`;

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1020px){
        justify-content: center;
    }
`;

export const FooterNav = styled.nav`
    display: flex;
    align-items: center;
    @media(max-width: 1020px){
        display: none;
    }
`;

export const FooterNavLink = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 45px 0 0;
    p{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2C2C2C;
    }
    img{
        margin: 0 0 0 8px;
        width: 8px;
    }
`;

export const FooterSocialIcons = styled.div`
    display: flex;
    align-items: center;
    a{
        margin: 0 0 0 35px;
    }
    img{
        width: 25px;
    }
    @media(max-width: 1020px){
        a{
            :first-child{
                margin: 0;
            }
        }       
    }
`;

export const FooterBottom = styled.div`
    margin: 100px 0 0 0;
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #7A7A7A;
    }
    @media(max-width: 1020px){
        margin: 80px 0 0 0;
        flex-direction: column;
        align-items: center;
        p{
            order: 1;
            
        }
    }
`;

export const FooterBottomNav = styled.nav`
    display: flex;
    @media(max-width: 1020px){
        margin: 40px 0 0;
        order: 2;
    }
    @media(max-width: 500px){
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterBottomLink = styled.a`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #7A7A7A;
    margin: 0 0 0 50px;
    @media(max-width: 500px){
        margin: 20px 0 0;
        :first-child{
            margin: 0;
        }
    }
`;
