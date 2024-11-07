"use client";

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals.style'; 
import ToggleTheme from '../styles/ToggleTheme.style';
import { AppProps } from 'next/app';
import { lightTheme, darkTheme } from '@/styles/Theme';

function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; 
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToggleTheme onClick={toggleTheme}>
        {isDarkTheme ? "Tema Escuro" : "Tema Claro"}
      </ToggleTheme>
     
    </ThemeProvider>
  );
}

export default App;
