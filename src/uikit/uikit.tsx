import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type FlexProps = {
  justify?: 'space-between' | 'space-around' | 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  margin?: string | '0';
  flex?: number;
  direction?: 'column' | 'row';
  flexWrap?: string ;
  width?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex: ${(props) => props.flex || 'none'};
  justify-content: ${(props) => props.justify || 'stretch'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
  width: ${(props) => props.width || 'auto'};
`;


export const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
`

export const Button = styled.button`
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  padding: 17px 70px;
  background: #F48020;
  box-shadow: 0px 10px 30px -10px rgba(228, 103, 0, 0.5);
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Ibg = styled.div`
  position: relative;
`

export const IbgImg = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`