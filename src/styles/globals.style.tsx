import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quertenary: string;
      text: string;
      subtitle: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    size: {
      title: string;
      subtitle: string;
    }
  }
}

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#101419',
    secondary: '#141A1F',
    tertiary: '#825BDD',
    quertenary: '#896ad1',
    text: '##FFFFFF',
    subtitle: '#999999',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  size: {
    title: '1.5rem',
    subtitle: '1rem',
  }
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.colors.primary};
    --foreground: ${({ theme }) => theme.colors.text};
    --background-list: ${({ theme }) => theme.colors.secondary};
    --background-button-navigation-tab: ${({ theme }) => theme.colors.quertenary};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #101419; 
      --foreground: #FFFFFF; 
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: var(--background);
    color: var(--foreground);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default darkTheme;
