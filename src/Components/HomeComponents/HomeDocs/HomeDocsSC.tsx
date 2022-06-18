import styled from 'styled-components';

export const HomeDocsSC = styled.section`
    padding: 0 0 70px;
`;

export const HomeDocsNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

export const HomeDocsLink = styled.a`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    transition: .3s;
    :hover{
        border: 5px solid #4478BB;
    }
    canvas{
        width: 100% !important;
        height: 100% !important;
        filter: drop-shadow(0px 217px 130px rgba(0, 0, 0, 0.01)) drop-shadow(0px 97px 97px rgba(0, 0, 0, 0.01)) drop-shadow(0px 24px 53px rgba(0, 0, 0, 0.01)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.01));
    }
`;

export const HomeDocsLinkTile = styled.h3`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #2C2C2C;
    margin: 25px 0;
`;
