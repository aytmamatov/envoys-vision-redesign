import styled from 'styled-components';

type SCProps = {
    width: string;
}

export const SearchComponentWrap = styled.div<SCProps>`
    max-width: ${(props) => props.width};
    width: 100%;
    display: flex;
    align-items: center;


    input{
        outline: none;
        border: none;

        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #7A7A7A;
        background: #F2F2F2;
        border-radius: 8px 0 0 8px;

        width: 100%;
        padding: 15px 10px 15px 20px;
        
        ::placeholder{
            font-family: 'Roboto Flex';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #7A7A7A;
        }

        &.calendar{
            margin: 0 0 0 auto;
        }
    }

    button{
        background: #F2F2F2;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
        outline: none;
        border: none;

        padding: 12px 20px 12px 10px;
    }

    img{
        width: 20px;
    }
`;
