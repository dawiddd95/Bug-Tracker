import React from 'react';
import { BrowserRouter, Router, Route  } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { renderWithRouter } from 'testUtils';
import { fireEvent } from '@testing-library/dom';
import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';


describe('AccountMenu Component', () => {
    it('displays Span Menu', () => {
        const { getByText } = renderWithRouter(<AccountMenu />)

        expect(getByText('Menu')).toBeInTheDocument();
    })


    it('Displays menu when mouse over on menu text', async () => {
        // container create div and put component inside this div
        const { getByText, container } = renderWithRouter(<AccountMenu />)
        const menu = getByText(/menu/i)

        expect(container).not.toHaveTextContent(/Themes/i)
        expect(container).not.toHaveTextContent(/Profile/i)
        expect(container).not.toHaveTextContent(/Logout/i)

        fireEvent.mouseOver(menu)

        expect(container).toHaveTextContent(/Themes/i)
        expect(container).toHaveTextContent(/Profile/i)
        expect(container).toHaveTextContent(/Logout/i)
    })


    it('Proper Routes in menu', async () => {
        const history = createMemoryHistory();
        // mock push function
        history.push = jest.fn();

        const { getByText } = renderWithRouter(
            <Router history={history}>
                <AccountMenu />
            </Router>
        )
        const menu = getByText(/menu/i)

        fireEvent.mouseOver(menu)
        fireEvent.click(getByText(/Themes/i))
        fireEvent.click(getByText(/Profile/i))
        // spy on push calls, assert on url (parameter)
        expect(history.push).toHaveBeenCalledWith('/user/themes');
        expect(history.push).toHaveBeenCalledWith('/user/:id/profile');
    })

    
    it('Remove session storage on logout', async () => {
        const { getByText } = renderWithRouter(<AccountMenu />)

        window.sessionStorage.setItem('session', true)
        expect(window.sessionStorage.getItem('session')).toBe("true");

        const menu = getByText(/menu/i)
        fireEvent.mouseOver(menu)

        const logout = getByText(/Logout/i)
        fireEvent.click(logout)
        
        expect(window.sessionStorage.getItem('session')).toBe(null);
    })


    it('Redirect on logout', async () => {
        const { getByText, container } = renderWithRouter(
            <BrowserRouter>
                <AccountMenu />
                <Route path='/'>Home page</Route>
            </BrowserRouter>
        )

        const menu = getByText(/menu/i)
        fireEvent.mouseOver(menu)

        const logout = getByText(/Logout/i)
        fireEvent.click(logout)
        
        expect(container).toHaveTextContent(/Home page/);
    })
})
