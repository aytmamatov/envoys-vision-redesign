import styled from 'styled-components';

export const TableSC = styled.div`
    position: relative;
    bottom: 80px;
`;

export const TableWrap = styled.div`
    max-width: 100%;
    overflow-x: auto;
    padding: 10px;

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

    table{
        width: 100%;
        background: #fff;
        box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
        border-radius: 8px;
        tr{
            display: flex;
            align-items: center;
            :first-child{
                border-radius: 8px;
                background: #F9F9F9;
            }
            :last-child{
                border-radius: 8px;
            }
        }
        tr.preHeader{
            padding: 20px 0 0;
            td{
                padding: 0;
            }
        }

        th, td{
            padding: 21px 0;
            text-align: center;
            min-width: 200px;
            flex: 1;
            font-family: 'Roboto Flex';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #045599;
            
            span{
                margin: 0 10px 0 0;
                font-size: 16px;
                line-height: 19px;
                color: #4478BB;
                cursor: pointer;
            }
        }
        td.half{
            flex: 0.5;
            min-width: 100px;
        }
        td.first, th.first{
            padding: 0 0 0 40px !important;
            text-align: start;
        }
        td.small{
            font-size: 12px;
            line-height: 15px;
            color: #045599;
        }

        td.small-y{
            font-size: 12px;
            line-height: 15px;
            color: #F48020;
        }
        td.number{
            font-size: 16px;
            cursor: pointer;
            line-height: 19px;
            text-decoration-line: underline;
            color: #4478BB;
            margin: 0;
        }
    }
`;
