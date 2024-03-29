import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      font-style: normal;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   html {
      font-size: 62.5%;
   }

   body {
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
   }
`;

export default GlobalStyle;
