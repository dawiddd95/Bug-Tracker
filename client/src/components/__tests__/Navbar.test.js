import React from 'react';
import { renderWithRouter } from 'testUtils';
import { Provider } from 'react-redux';
import store from 'store';
import Navbar from 'components/molecules/Navbar/Navbar';


describe('Navbar Component', () => {
    it('Renders children text', () => {
        const { getByText } = renderWithRouter(
            <Provider store={store}>
                <Navbar />
            </Provider>
        )

        expect(getByText(/Bug Tracker/i)).toBeInTheDocument()
        expect(getByText(/Dashboard/i)).toBeInTheDocument()
        expect(getByText(/Projects/i)).toBeInTheDocument()
        expect(getByText(/Profile/i)).toBeInTheDocument()
        expect(getByText(/Themes/i)).toBeInTheDocument()
    })
});