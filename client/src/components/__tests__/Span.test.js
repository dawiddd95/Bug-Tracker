import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme/mainTheme';
import { Span } from 'components/atoms/Span/Span';

describe('Span Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Span>Example of span text</Span>
            </ThemeProvider>,
        );

        getByText('Example of span text');
    });
});
