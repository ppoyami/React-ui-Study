import { Global, css, ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    primary: '#15141b',
    text: '#f4f7ff',
  },
};

const styles = theme => css`
  html {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
  }

  li {
    list-style: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;

export default function BaseStyles({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      {children}
    </ThemeProvider>
  );
}
