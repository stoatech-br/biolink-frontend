import { ThemeProvider } from 'styled-components';
import darkTheme, { GlobalStyle } from './Theme.d';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;