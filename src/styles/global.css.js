import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --color-primary: #5ece7b;
    --color-primary-light: #6fe18c;
    --color-primary-dark: #62ca7d;
    --color-text: #1D1F22;
  }
  *{
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
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

  iframe
  {
     /* display: none; */
  }
  a{
    display: inline-flex;
    text-decoration: none;
    color: var(--color-text);
  }
`;

export const ButtonStyle = styled.button`
  transition: all 0.15s ease;
  display: flex;
  font-family: 'Raleway';
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 16px 32px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
`;

export const ButtonOutline = styled(ButtonStyle)`
  border: 1px solid #1d1f22;
  color: #1d1f22;
  &:hover,
  &:focus {
    transition: all 0.15s ease;

    background: #f4f4f4;
  }
  &:active {
    transition: all 0.15s ease;
    background: #e2e2e2;
  }
`;
export const ButtonFill = styled(ButtonStyle)`
  background: var(--color-primary);
  color: white;
  &:hover,
  &:focus {
    transition: all 0.15s ease;

    background: var(--color-primary-light);
  }
  &:active {
    transition: all 0.15s ease;
    background: var(--color-primary-dark);
  }
`;
