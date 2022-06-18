import styled from 'styled-components';

export const DRCDDTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
    cursor: pointer;

    max-width: 700px;
`;

export const DRCDDTitle = styled.h3`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
`;

export const DRCDDImage = styled.img`
    width: 20px;
`;

interface Props {
    show: boolean;
}

export const DRCDDBottom = styled.div<Props>`
    max-width: 700px;
    padding: ${(props) => (props.show ? '20px 0 20px 20px' : '0 0 0 20px')};
    height: ${(props) => (props.show ? 'auto' : '0')};
    
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    
    transition: .3s linear;

    background: #FFFFFF;
    border-radius: 8px;
`;

export const DRCDDImage2 = styled.img`
    width: 20px;
    margin: 0 0 0 auto;
    cursor: pointer;
    @media(max-width: 500px){
        display: none;
    }
`;

export const DRCDDBottomTitleWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const DRCDDDoc = styled.img`
    width: 11px;
    margin: 0 6px 0 0;
`;

export const DRCDDBottomTitle = styled.a`
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #045599;
    transition: .3s linear;

    :hover{
        font-size: 17px;
    }
`;

export const DRCDDList = styled.nav`
    padding: 15px 0 15px 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DRCDDItem = styled.a`
    padding: 10px 0;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #4478BB;
    transition: .3s linear;
    
    ::before {
        content: "•";
        color: rgb(68, 120, 187);
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }

    :hover{
        font-size: 14px;
        font-weight: 500;
        text-decoration: underline;
    }
`;
