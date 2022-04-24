import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
  }
  
`;
