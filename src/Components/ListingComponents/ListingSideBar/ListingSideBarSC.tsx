import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarSC = styled.div`
    max-width: 300px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 1020px){
        display: none;
    }
`

export const SidebarTitle = styled.h2`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    text-transform: uppercase;
    color: #F48020;
    margin: 70px 0 50px;
`

export const SidebarLink = styled(Link)`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #2C2C2C;

    margin: 0 0 50px;

    transition: .3s linear;

    :last-child{
        margin: 0;
    }

    :hover{
        color: #4478BB;
        font-weight: 500;
    }

    &.active{
        color: #4478BB;
        font-weight: 500;
    }
`



