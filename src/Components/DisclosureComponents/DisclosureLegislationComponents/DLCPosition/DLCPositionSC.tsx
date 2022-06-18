import styled from 'styled-components';
import DRCWrap from '../../DisclosureRoolsComponents/DRCListing/DRCListingSC';

export const DCWrap = styled(DRCWrap)`   
    max-width: 680px;
    background: #FFFFFF;
    border-radius: 8px;
`;

export const DCLink = styled.a`
    width: 100%;
    display: block;
    margin: 10px 0;

    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #4478BB;

    transition: .3s linear;
 
    :before{
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
