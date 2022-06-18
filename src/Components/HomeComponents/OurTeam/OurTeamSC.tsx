import styled from 'styled-components';

export const OurTeamSC = styled.section`
    padding: 100px 0;
`;

export const OurTeamTitle = styled.h2`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    color: #045599;
    margin: 0 0 80px;
`;

export const OurTeamList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media(max-width: 1020px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 530px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const OurTeamItem = styled.li`
    flex: 1;
    background: #fff;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
`;

export const OurTeamItemImage = styled.img`
    width: 170px;
    margin: 0 auto;
    border-radius: 50%;
`;

export const OutTeamItemTitle = styled.h4`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #045599;
    margin: 20px 0;
`;

export const OutTeamItemText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7A7A7A;
`;

export const OutTeamItemLink = styled.a`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F9F9F9;
    border-radius: 50%;
    margin: 0 5px 0 0;
    transition: .3s;
    :last-child{
        margin: 0;
    }
    :hover{
        background: #F48020;
    }
`;

export const OutTeamItemLinkImag = styled.img`
    width: 15px;
`;
