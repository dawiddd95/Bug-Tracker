// Typowy formularz + walidacja warunkowa i czy button ma disable jesli jest tam taki case 1

import React from 'react';
import { renderWithRouter } from 'testUtils';
import { Provider } from 'react-redux';
import { fireEvent } from '@testing-library/react';
import store from 'store';
import ProfileForm from 'components/molecules/ProfileForm/ProfileForm';


describe('ProfileForm Component', () => {
    it('Render edit button', () => {
        const { getByText } = renderWithRouter(
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        )

        expect(getByText(/edit/i)).toBeInTheDocument();
    })


    it('Edit button is hidden in edit mode', async () => {
        const { getByText, container } = renderWithRouter(
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        )

        const button = getByText(/edit/i)
        fireEvent.click(button)

        expect(container).not.toHaveTextContent(/edit/i)
    })


    it('Show cancel and save button in edit mode', async () => {
        const { getByText, container } = renderWithRouter(
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        )

        const button = getByText(/edit/i)

        expect(container).not.toHaveTextContent(/cancel/i)
        expect(container).not.toHaveTextContent(/save/i)

        fireEvent.click(button)

        expect(container).toHaveTextContent(/cancel/i)
        expect(container).toHaveTextContent(/save/i)
    })


    it('Inputs are disabled if not in edit mode', async () => {
        const { getByTestId, getByPlaceholderText } = renderWithRouter(
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        )

        const id = getByTestId ('id')
        const type = getByTestId('type')
        const name = getByPlaceholderText('Name')
        const surname = getByPlaceholderText('Surname')
        const email = getByPlaceholderText('Email')

        expect(id).toBeDisabled()
        expect(type).toBeDisabled()
        expect(name).toBeDisabled()
        expect(surname).toBeDisabled()
        expect(email).toBeDisabled()
    })

    it('Inputs name surname email are not disabled in edit mode', async () => {
        const { getByText, getByPlaceholderText } = renderWithRouter(
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        )

        const name = getByPlaceholderText('Name')
        const surname = getByPlaceholderText('Surname')
        const email = getByPlaceholderText('Email')
        const button = getByText(/edit/i)

        expect(name).toBeDisabled()
        expect(surname).toBeDisabled()
        expect(email).toBeDisabled()

        fireEvent.click(button)

        expect(name).not.toBeDisabled()
        expect(surname).not.toBeDisabled()
        expect(email).not.toBeDisabled()
    })
});