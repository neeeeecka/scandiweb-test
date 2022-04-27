import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-primary: #5ece7b;
    --color-text: #1D1F22;
  }
  *{
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
  button, input[type="button"]{
      background: transparent;
      border: 0;
      cursor: pointer;
      padding: 0;
  }
  
`;
