import styled from "styled-components";

export const AnaliticsListSC = styled.ul`
    list-style: none;
    width: 100%;


    
    background: #FFFFFF;
    box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
    border-radius: 8px;

    padding: 0 0 45px 0;

    

    max-width: 100%;
    overflow-x: auto;

    ::-webkit-scrollbar {
        width: 10px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #ECECEC;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #9c9b9b;
        border-radius: 8px;
    }
`

export const AnaliticsListHeader = styled.li`
    background: #F9F9F9;
    width: 100%;
    display: flex;
    align-items: center;
    
    p{
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;

        flex: 1;
        min-width: 200px;
        height: 50px;
        background: #F9F9F9;

        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #045599;
        text-align: center;
        /* margin: 0 20px; */
        
        :first-child{
            min-width: 100px;
            flex: .5;
        }

        &.earning{
            min-width: 150px;
        }
    }
`

export const AnaliticsListList = styled(AnaliticsListHeader)`
    background: #fff;
    position: relative;
    padding: 20px 0;

    p{
        color: #7A7A7A;
        background: #fff;
        :first-child{
            flex: .5;
        }
    }

    /* :after{
        content: '';
        display: block;
        width: 93%;
        height: 1px;
        background: #D8D8D8;
        position: absolute;
        top: 90%;
        left: 3%;
    } */


`