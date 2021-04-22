import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme/mainTheme';
import { Strong } from 'components/atoms/Strong/Strong';

describe('Strong Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Strong>Example of strong text</Strong>
            </ThemeProvider>,
        );

        getByText('Example of strong text');
    });
});