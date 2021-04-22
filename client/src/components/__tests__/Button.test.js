import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme/mainTheme';
import { Button } from 'components/atoms/Button/Button';

describe('Button Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Button>New</Button>
            </ThemeProvider>
        )

        getByText('New');
    });


    it('Displays proper type', () => {
        const { getByText } = render(
            <ThemeProvider theme={defaultTheme}>
                <Button type='button'>New</Button>
            </ThemeProvider>,
        );

        const button = getByText(/new/i)

        expect(button).toHaveAttribute('type', 'button');
    });
});
