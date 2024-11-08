'use client'

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      backgroundBoxList: string;
      backgroundButton: string;
      backgroundButtonTabFocus: string;
      borderColor: string;
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
    };
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    backgroundColor: '#101419',
    backgroundBoxList: '#141A1F',
    backgroundButton: '#825BDD',
    backgroundButtonTabFocus: '#896ad1',
    borderColor: '#052B2E',
    text: '#FFFFFF',
    subtitle: '#999999',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  size: {
    title: '2.4rem',
    subtitle: '1.6rem',
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    backgroundColor: '#FFFFFF',
    backgroundBoxList: '#FCFCFC',
    backgroundButton: '#825BDD',
    backgroundButtonTabFocus: '#896ad1',
    borderColor: '#EDEDED',
    text: '#121020',
    subtitle: '#888888',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  size: {
    title: '2.4rem',
    subtitle: '1.6rem',
  },
};

export { darkTheme, lightTheme }