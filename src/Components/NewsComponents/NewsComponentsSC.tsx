import styled from 'styled-components';
import { Ibg, IbgImg } from '../../uikit/uikit';

export const NCWrap = styled.div`
  
`;

export const NCtitle = styled.h1`
  color: #4478bb;
  font-weight: 600;
  font-family: "Exo 2", sans-serif;
  font-size: 64px;
  line-height: calc(70 / 64 * 100%);
  text-transform: uppercase;
  margin: 100px 0px 80px 0px;
  @media (max-width: 767px) {
    margin: 100px 0px 70px 0px;
    font-size: 36px;
  }
  @media (max-width: 375px) {
    margin: 80px 0px 80px 0px;
  }
`;

export const NCBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 10px;
  &:not(:last-child) {
    margin: 0px 0px 80px 0px;
  }
  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(0, auto);
  };
  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;
export const NCLargeItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  grid-column: span 2;
  grid-row: span 2;
  align-self: start;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  @media (max-width: 475px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`;

export const NCImage = styled.div`
  img {
    ${IbgImg}
  }  
`;

export const NCContent = styled.div`
  padding: 320px 110px 25px 60px;
  position: relative;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0px 0px 30px 0px;
  }
  @media (max-width: 675px) {
    padding: 256px 22px 35px 10px;
  }
`;

type NCContentSubtitleType = {
  color?: string
}

export const NCContentSubtitle = styled.p<NCContentSubtitleType>`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(20 / 16 * 100%);
  color: ${({ color }) => color};
`;

type NCContentTitleType = {
  color?: string
}

export const NCContentTitle = styled.h2<NCContentTitleType>`
  font-family: "Exo 2";
  font-size: 64px;
  line-height: calc(70 / 64 * 100%);
  color: ${({ color }) => color};
  text-transform: uppercase;
  @media (max-width: 675px) {
    font-size: 36px;
  };
`;

type NCContentDateType = {
  color?: string;
};

export const NCContentDate = styled.div<NCContentDateType>`
  font-weight: 400;
  font-size: 13px;
  line-height: calc(20 / 13 * 100%);
  color: ${({ color }) => color};
`;

type NCContentMoreType = {
  color?: string;
};

export const NCContentMore = styled.a<NCContentMoreType>`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(16 / 14 * 100%);
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  img {
    width: 32px;
    margin: 0 0 0 5px;
  }
`;

export const NCItem = styled.div`

`;

export const NCItemImage = styled(Ibg)`
  padding: 0px 0px 88.23% 0px;
  border-radius: 8px;
  overflow: hidden;
  img {
    ${IbgImg}
  }
  &:not(:last-child) {
    margin: 0px 0px 10px 0px;
  }
`;

export const NCItemContent = styled.div`
  padding: 0px 20px 0px 0px;
  & > *:not(:last-child) {
    margin: 0px 0px 10px 0px;
  }
`;

export const NCItemSubtitle = styled(NCContentSubtitle)`
  color: #2c2c2c;
`;

export const NCItemTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: calc(25 / 20 * 100%);
  color: #2c2c2c;
`;
