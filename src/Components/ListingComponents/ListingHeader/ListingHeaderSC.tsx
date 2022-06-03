import { Link } from "react-router-dom";
import styled from "styled-components";


export const LHSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 45px 0 0;
`

export const LHNav = styled.nav`
    display: flex;

    @media(max-width: 1020px){
        overflow-x: scroll;

        ::-webkit-scrollbar {
            visibility: hidden;
        }

        ::-webkit-scrollbar-track {
            visibility: hidden;
        }

        ::-webkit-scrollbar-thumb {
            visibility: hidden;
        }
    }
`

export const LHLink = styled(Link)`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #4478BB;

    padding: 0 10px 5px;
    margin: 0 15px 0 0;
    transition: .3s linear;

    :hover{
        border-bottom: 1px solid #F48020;
        color: #F48020;
    }

    &.active{
        border-bottom: 1px solid #F48020;
        color: #F48020; 
    }
`

export const LHTotal = styled.span`
    padding: 10px;
    background: #F48020;
    margin: 0 0 0 auto;
    border-radius: 40px;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;

    @media(max-width: 1020px){
        display: none;
    }
`