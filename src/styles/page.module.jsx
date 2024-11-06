'use client'

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globals.style'; 
import ToggleTheme from './ToggleTheme.style';

function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <ToggleTheme toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </ThemeProvider>
  );
}

export default App;