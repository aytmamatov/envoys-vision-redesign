import styled from 'styled-components';

export const HomePartnersSC = styled.section`
    background: #fff;
    padding: 110px 0;
`;

export const HomePartnersWrap = styled.ul`
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media(max-width: 530px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const HomePartnersItem = styled.li`
    max-width: 200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomepartnersImage = styled.img`
    max-width: 100%;
`;
