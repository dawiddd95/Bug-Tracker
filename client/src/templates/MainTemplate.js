// MainTemplate dostarczy do aplikacji:
// 1. ThemeProvider z SC
// 2. Globalne style -> Globalne style to style jakie mają być w obrębie całej aplikacji, nie ma tam dużo rzeczy i są one podstawowe
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }) => {
  return (
    <>
      {/* 
                Skoro MainTemplate Wrappuje całą aplikację, to cała aplikacja dostanie globalne style z tego komponentu 
                Jeśli będziemy chcieli nadpisać jakiś styl z GlobalStyle to opleciemy widok jakimś tempalte z src/template, któy nadpisze styl globalny
            */}
      <GlobalStyle />
      {/* 
                Deklarujemy, że w całej aplikacji mają być dostępne style z theme.js, 
                ponieważ w Root.js opletliśmy całą aplikację w <MainTemplate> ... </MainTemplate> 
                childrenem ThemeProvider, więc jest cała aplikacja
            */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  // zamiast node dla childrena możemy też podać element
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
