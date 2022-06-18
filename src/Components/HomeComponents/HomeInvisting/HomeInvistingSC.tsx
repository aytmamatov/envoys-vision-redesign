import styled from 'styled-components';

export const HomeInvistingSC = styled.section`
    padding: 82px 0;
    background: #F9F9F9;
`;

export const HomeInvistingTitle = styled.h1`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 70px;
    text-transform: uppercase;
    color: #4478BB;
    max-width: 1180px;
    @media(max-width: 620px){
        font-size: 36px;
        line-height: 40px;
    }
    @media(max-width: 340px){
        font-size: 32px;
    }

`;

export const HomeInvistingText = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #7A7A7A;
    margin: 20px 0;
    @media(max-width: 620px){
        font-size: 16px;
        line-height: 19px;
    }
`;

export const HomeInvistingWrap = styled.div`
    display: flex;
    margin: 70px 0 0;
    @media(max-width: 1020px){
        display: none;
    }
`;

export const HomeInvistingItem = styled.div`
    flex: 1;
    margin: 0 20px 0 0;
    display: flex;
    flex-direction: column;
    :last-child{
        padding: 72px 75px;
        margin: 0;
        min-height: 380px;
        max-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        transition: .3s;
    }
    &.bg-none{
        background: none;
    }
    border-radius: 8px;
`;

export const HomeInvisting2Title = styled.h3`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #F48020;
    @media(max-width: 620px){
        font-size: 20px;
    }
`;

export const HomeInvisting2Text = styled.p`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7A7A7A;
    margin: 20px 0 0;
    @media(max-width: 620px){
        font-size: 16px;
    }
`;

export const HomeInvistingOption = styled.div`
    padding: 50px 30px;
    background: #fff;
    flex: 1;
    margin: 0 0 20px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    
    :last-child{
        margin: 0;
    }
    :hover{
        outline: 5px solid #4478BB;
        transition: .2s;
        cursor: pointer;
    }
    &.active{
        outline: 5px solid #4478BB;
        span{
            color: #4478BB;
        }
    }

`;

export const HomeInvistingOptionText = styled.span`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    color: #2C2C2C;
    @media(max-width: 620px){
        font-size: 20px;
        line-height: 30px;
    }
`;

export const HomeInvistingWrap2 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px 0 0;
    width: 100%;
    @media(min-width: 1020px){
        display: none;
    }
`;

export const HomeInvistingOption2 = styled.div`
    width: 100%;
    padding: 50px 30px;
    background: #fff;
    flex: 1;
    margin: 0 0 20px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    :last-child{
        margin: 0;
    }
    :hover{
        outline: 5px solid #4478BB;
        transition: .2s;
        cursor: pointer;
        span{
            color: #4478BB;
        }
    }
    @media(max-width: 620px){
        padding: 30px 15px;
    }
`;

type Props = {
    show: boolean;
}

export const HomeInvistingItem2 = styled.div<Props>`
    margin: ${(props) => (props.show ? '0 0 20px' : '0')};
    padding: ${(props) => (props.show ? '72px 75px ' : '0 75px')};
    height: ${(props) => (props.show ? '100%' : '0')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    background: #fff;
    transition: .3s linear;
    border-radius: 8px;
    @media(max-width: 620px){
        padding: ${(props) => (props.show ? '42px 20px ' : '0 20px')};
    }
`;
