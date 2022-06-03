import { Link } from "react-router-dom";
import styled from "styled-components";



export const CLWrap = styled.ul`
    padding: 40px;
    width: 100%;
    list-style: none;
    background: #fff;
    border-radius: 8px;
    margin: 60px 0 95px;
    @media(max-width: 603px){
        padding: 10px;
    }
`

export const CLItem = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 0 40px;
    :last-child{
        margin: 0;
    }
    :first-child{
        margin: 0 0 50px;
    }
`

export const CLItemTitle = styled.h3`
    flex: 1;
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #045599;
    :last-child{
        text-align: center;
    }
    @media(max-width: 603px){
        :last-child{
           text-align: end;
        }
    }
    @media(max-width: 370PX){
        font-size: 14px;
    }
`

export const CLItemName = styled(Link)`
    flex: 1;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #045599;

    &.line{
        text-decoration-line: underline;
    }
    @media(max-width: 370PX){
        font-size: 14px;
    }
`

export const CLItemNameC = styled.p`
    flex: 1;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
    text-align: center;

    @media(max-width: 603px){
        text-align: end;
    }
    @media(max-width: 370PX){
        font-size: 14px;
    }
`

