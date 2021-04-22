import React from 'react';
import { render} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { defaultTheme } from 'theme/mainTheme';

export function renderWithRouter(
    ui,
    {
        route = '/', 
        history = createMemoryHistory({ initialEntries: [route]}),
    } = {}
) {
    return {
        ...render(
            <Router history={history}>
                <ThemeProvider theme={defaultTheme}>
                    {ui}
                </ThemeProvider>
            </Router>
        ),
        history
    }
}
