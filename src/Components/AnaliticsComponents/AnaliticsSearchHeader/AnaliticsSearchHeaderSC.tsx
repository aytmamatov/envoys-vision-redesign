import styled from 'styled-components';

export const ASHWrap = styled.div`
    display: flex;
    width: 100%;

    padding: 40px 0 60px;
    @media(max-width: 1388px){
        flex-direction: column;
    }
`;

export const ASHSwiper = styled.div`
    max-width: 940px;
    width: 100%;
    background: #F2F2F2;
    border-radius: 8px 0 0 8px;
    
    padding: 15px 0;



    .swiper-button-next, .swiper-button-prev{
        :after{
            font-size: 23px;
            font-weight: 600;
            color: #4478BB;
            font-size: 23px;
        }
    }
`;

export const ASHSlide = styled.div`

    p{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #7A7A7A;

        text-align: center;

        cursor: pointer;
        transition: .3s linear;
        
        :hover{
            text-decoration: underline;
            color: #4478BB;
        }
    }
`;

export const ASHDate = styled.input`
    border: none;
    padding: 15px;
    background: #F1F1F1;
    outline: none;
    margin: 0 20px 0 0;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid #D8D8D8;
    min-width: 55px;
    max-width: 55px;

    width: 100%;

    ::placeholder{
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #7A7A7A;
    }
    ::-webkit-calendar-picker-indicator {
      background: url(${require('../../../assets/Images/Calendars/CalendarIcon.svg').default}) no-repeat;
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      width: 20px;
    }
    -moz-appearance: textfield;

    ::-webkit-datetime-edit{ color: transparent; }
    :focus::-webkit-datetime-edit{ color: #000; }

    @media(max-width: 1388px){
        margin: 0;
    }

`;

export const ASHSearcAndSidebar = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    @media(max-width: 1388px){
        order: -1;
        margin: 0 0 20px;
        img{
            margin: 0 0 0 auto;
        }
    }

    @media(max-width: 540px){
        img{
            margin: 0 0 0 15px;
        }
    }

`;
