import { DefaultTheme, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }
  
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;