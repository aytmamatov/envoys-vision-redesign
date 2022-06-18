import styled from 'styled-components';

type Props = {
    show: boolean
}

export const ASSC = styled.div<Props>`
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 2;
    top: 0;
    left: ${(props) => (props.show ? '0' : '100%')};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    
    padding: ${(props) => (props.show ? '10px' : '0')};
    

    background: #fff;
    transition: .3s linear;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow-y: auto;

    div{
        height: 100%;
    }
`;

export const ASWrap = styled.div`

`;
