import { createGlobalStyle } from 'styled-components';

// Globalne style to style jakie mają być w obrębie całej aplikacji, nie ma tam dużo rzeczy i są one podstawowe.
// Jakiś typ czcionki dla aplikacji,
// Jakaś może stała wielkość czcionek
// może jakiś padding dla body, jeśli mamy zawsze jakiś navbar boczny na position: fix, bo wtedy content będzie uciekał pod element z fixem
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
