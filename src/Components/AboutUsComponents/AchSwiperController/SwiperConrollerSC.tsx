import styled from 'styled-components';

export const SCCircle = styled.span`
    width: 10px;
    height: 10px;
    background: #ECECEC;
    border-radius: 50%;
`;

export const SCCircleActive = styled(SCCircle)`
    background: #F48020;
    margin: 0 4px;
`;

type Props = {
    img: boolean;
}

export const SCBtn = styled.button<Props>`
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px;
    img{
        width: 22px;
        height: 22px;
        transition: .3s linear;
        transform: ${(props) => (props.img ? 'rotate(180deg)' : 'rotate(0)')};
    }
    :hover{
        img{
            transform: ${(props) => (props.img ? 'translateX(5px) rotate(180deg)' : 'translateX(-5px)')};
        }
    }
`;
