import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'theme/mainTheme.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// Musimy dodać decorator ThemeProvider oraz do React Router
export const decorators = [
  (story) => <ThemeProvider theme={theme}> {story()} </ThemeProvider>,
  (story) => <BrowserRouter> {story()} </BrowserRouter>,
];
