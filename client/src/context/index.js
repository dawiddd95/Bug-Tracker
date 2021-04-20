import React from 'react';
import { defaultTheme } from 'theme/mainTheme';

export const ThemeContext = React.createContext({
    theme: defaultTheme,
    /* eslint-disable */
    changeTheme: value => {},
});
