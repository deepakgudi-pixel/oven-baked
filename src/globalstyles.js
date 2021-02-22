import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Kanit', sans-serif;
  }

  html, body {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  body::-webkit-scrollbar-track {
    background: #000;
  }
  
  body::-webkit-scrollbar-thumb {
    background: #e31837;
  }


`;