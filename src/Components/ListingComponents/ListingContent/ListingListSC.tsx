import styled from "styled-components";

export const LLSC = styled.section`
    margin: 30px 0 0 50px;
    width: 100%;
    @media(max-width: 1020px){
        margin: 30px 0;
    }
`

export const LLInputWrap = styled.div`
    margin: 0 0 0 auto;
    width: 460px;

    @media(max-width: 1020px){
        input{
            font-size: 12px;
            ::placeholder{
                font-size: 12px;
            }
        }

        width: 100%;
        margin: 0;

    }
    @media(max-width: 360px){
        input{
            ::placeholder{
                font-size: 10px;
            }
        }
    }

    @media(max-width: 600px){
        order: 1;
    }
`

export const LLHeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100;

    @media(max-width: 600px){
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const LLBurger = styled.img`
    cursor: pointer;
    width: 33px;
    margin: 0 0 0 auto;

    @media(min-width: 1020px){
        display: none;
    }

    @media(max-width: 600px){
        margin: 0 0 35px auto;
    }

    &.analitics{
        @media(max-width: 1220px){
            display: block !important;
        }
    }
`

