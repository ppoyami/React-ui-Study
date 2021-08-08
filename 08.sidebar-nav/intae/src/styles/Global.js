import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;400;700&display=swap');

  html {
    font-size: 62.5%; // root fontsize 10px
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Serif KR', serif;
  }

  *::after,
  *::before,
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
