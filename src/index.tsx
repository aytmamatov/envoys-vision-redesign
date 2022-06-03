import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from "styled-components";

import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html,
  body{
     height: 100%;
     overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  a{
    text-decoration: none;
  }
  *{
    box-sizing:border-box;
    padding: 0;
    margin:0; 
    font-family: "Roboto", sans-serif;
  }
  .swiper{
    height: 100%;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <App />
  </BrowserRouter>
);