import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme/mainTheme';
import { Header } from 'components/atoms/Header/Header';

describe('Header Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Header>Bug tracker</Header>
            </ThemeProvider>,
        );

        getByText('Bug tracker');
    });
});
