import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSC = styled.header`
    height: 60px;
    /* display: flex;
    align-items: center; */
`;

export const HeaderLogo = styled(Link)`
    img{
        width: 220px;
    }
`;

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const HeaderNav = styled.nav`
    display: flex;
    height: 100%;

    @media(max-width: 1220px){
        display: none;
    }

`;

export const HeaderNavLink = styled(Link)`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #133D65;
    padding: 0 30px;
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;

    img{
        width: 5.3;
        margin: 0 0 0 8px;
    }
`;

export const HeaderBtn = styled.button`
    padding: 3px 7px;
    border: none;
    border-right: 1px solid #ECECEC;
    border-left: 1px solid #ECECEC;
    background: none;
    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #045599;

    img{
        width: 7px !important;
        margin: 0 0 0 3px !important;
    }
    @media(max-width: 1220px){
        display: none;
    }
    &.show{
        display: flex !important;
        margin: 0 0 150px; 
    }
`;

type Props = {
    show: boolean;
}

export const HeaderDD = styled.div<Props>`
    padding: 30px 15px;

    position: absolute;
    top: 100%;
    left: 50%;

    text-align: start;

    transition: .3s;
    opacity: ${(props) => (props.show ? '1' : '0')};
    visibility: ${(props) => (props.show ? 'visibile' : 'hidden')};

    background: #fff;
    box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
    border-radius: 0px 0px 8px 8px;
    
    display: flex;
    flex-direction: column;
`;

export const HeaderLinkDD = styled(Link)`
    margin: 0 0 15px;
    width: 158px;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #2C2C2C;
    transition: .3s;

    :last-child{
        margin: 0;
    }

    :hover{
        color: #045599;
        font-weight: 600;
        font-size: 13px;
    }
`;

export const HeaderLangBtn = styled.button`
    background: none;
    border: none;
    outline: none;

    margin: 0 0 15px;
    width: 65px;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #2C2C2C;

    cursor: pointer;
    transition: .3s;

    :last-child{
        margin: 0;
    }

    :hover{
        color: #045599;
        font-weight: 600;
        font-size: 13px;
    }
`;

export const HeaderDDWrap = styled(HeaderDD)`
    flex-direction: row;
`;

export const HeaderDD2 = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        padding: 0 0 20px;
    }
`;

export const HeaderDDlang = styled(HeaderDD)`
    left: -15%;
    padding: 35px 15px 30px 15px;
`;

export const HeaderBurgerImage = styled.img`
    width: 33px;
    height: 20px;
    cursor: pointer;

    @media(min-width: 1220px){
        display: none;
    }
`;

export const HeaderAdaptive = styled.button`
    border: none;
    background: none;
    cursor: pointer;

`;

export const HeaderDDAdaptive = styled.div<Props>`
    position: absolute;
    z-index: 2;
    top: 60px;
    left: 0;

    height: ${(props) => (props.show ? 'calc(100% - 60px)' : '0')};
    width: 100%;

    background: #fff;

    transition: .3s;
    opacity: ${(props) => (props.show ? '1' : '0')};
    visibility: ${(props) => (props.show ? 'visibile' : 'hidden')};

    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    display: flex;
    align-items: center;
`;

export const HeaderDDAdaptiveLinks = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 238px;
    
    text-align: start;

    @media(max-width: 400px){
        width: 197px;
        &.market-wrap{
            width: auto;
        }
    }
    &.market-wrap{
        margin: 30px 0 0;
    }

    h3.market-title{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #4478BB;
        margin: 0 0 20px;
    }

    `;

export const HeaderDDAdaptiveLink = styled(Link)`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    color: #2C2C2C;
    margin: 0 0 50px;

    :last-child{
        margin: 0;
    }

    :hover{
        color: #F48020;
    }
    @media(max-width: 400px){
        font-size: 32px;
        line-height: 38px;
        &.market{
            font-size: 18px;
        }
    }


    &.market{
        margin: 0 0 18px;
        font-size: 14px;
        line-height: 18px;
    }
`;

export const HeaderDDAdaptiveSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img{
        width: 24px;
    }
    
    a{
        margin: 0 0 35px;
    
        :last-child{
            margin: 0;
        }
    }
`;
