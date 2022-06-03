import styled from "styled-components";

export const DisclosureContent = styled.div`
    margin: 100px 0 170px 80px;
    width: 100%;

    @media(max-width: 1200px){
        margin: 100px 0 170px;
    }
`

export const DisclosureList = styled.ul`
    list-style: none;
`

export const DisclosureItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 40px;

    :last-child{
        margin: 0;
    }
`

export const DisclosureTitle = styled.h3`
    width: 100%;
    max-width: 681px;
    
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;

    &.smaller{
        width: 210px;
    }


    span{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #4478BB;
    }
    @media(max-width: 700px){
        &.smaller{
            width: auto;
        }
    }

`

export const DisclosureLink = styled.a`
    width: 210px;
    background: #F48020;
    border-radius: 8px;
    padding: 12px;

    display: flex;

    img{
        width: 20px;
        margin: 0 7px 0 0;
    }

    span{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
    @media(max-width: 700px){
        width: auto;
        img{
            margin: 0;
        }
        span{
            display: none;
        }
    }

`
