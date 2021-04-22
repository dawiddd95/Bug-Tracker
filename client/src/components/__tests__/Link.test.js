import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';
import { createMemoryHistory } from 'history';
// import { ThemeProvider } from 'styled-components';
import { renderWithRouter } from 'testUtils';
// import { defaultTheme } from 'theme/mainTheme';
import { StyledLink } from 'components/atoms/Link/Link';

describe('Link Component', () => {
    it('Renders children text', () => {
        const { getByText } = renderWithRouter(
            // <ThemeProvider theme={defaultTheme}>
                <StyledLink to='/new'>Forgot your password?</StyledLink>
            // </ThemeProvider>,
        );

        getByText('Forgot your password?');
    });


    it('Routes to a new route', async () => {
        const history = createMemoryHistory();
        // mock push function
        history.push = jest.fn();
      
        const { getByText } = renderWithRouter(
            <Router history={history}>
                {/* <ThemeProvider theme={defaultTheme}> */}
                    <StyledLink to='/new'>New</StyledLink>
                {/* </ThemeProvider> */}
            </Router>
        );
      
        fireEvent.click(getByText('New'));
        // spy on push calls, assert on url (parameter)
        expect(history.push).toHaveBeenCalledWith('/new');
      });
});



