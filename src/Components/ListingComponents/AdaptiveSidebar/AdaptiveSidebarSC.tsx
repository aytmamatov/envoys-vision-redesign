import styled from "styled-components";

type Props = {
    show: boolean
}

export const ASSC = styled.div<Props>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: ${props => props.show?'0':'100%'};

    background: #fff;
    padding: 10px;
    transition: .3s linear;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ASWrap = styled.div`

`

