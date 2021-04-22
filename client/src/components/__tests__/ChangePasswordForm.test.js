import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'testUtils';
import { fireEvent, waitFor} from '@testing-library/react';
import ChangePasswordForm from 'components/molecules/ChangePasswordForm/ChangePasswordForm';
import Spinner from 'components/atoms/Spinner/Spinner';


describe('ChangePasswordForm Component', () => {
    it('should show errors if not validate', async () => {
        const { getByPlaceholderText, container } = renderWithRouter(
            <ChangePasswordForm id={300} />
        )

        const password = getByPlaceholderText('Password')
        const confirmPassword = getByPlaceholderText('Confirm password')

        fireEvent.click(password);
        fireEvent.click(confirmPassword);
        fireEvent.blur(password);
        fireEvent.blur(confirmPassword);

        await waitFor(() => {
            expect(container).toHaveTextContent(/Password is required/i)
            expect(container).toHaveTextContent(/Password must match/i)
        })
    })


    it('should not show errors if validate', async () => {
        const { getByPlaceholderText, container } = renderWithRouter(
            <ChangePasswordForm id={300} />
        )

        const password = getByPlaceholderText('Password')
        const confirmPassword = getByPlaceholderText('Confirm password')

        fireEvent.change(password, { target: { value: 'ZAQ!2wsx'} });
        fireEvent.change(confirmPassword, { target: { value: 'ZAQ!2wsx'} });
        fireEvent.blur(password);
        fireEvent.blur(confirmPassword);
            
        await waitFor(() => {
            expect(container).not.toHaveTextContent(/Password is required/i)
            expect(container).not.toHaveTextContent(/Password must match/i)
        })
    })

    it('Displays loading indicator on submit', async () => {
        const { getByPlaceholderText, getByText, getByTestId, container } = renderWithRouter(
            <ChangePasswordForm id={300} data-testid='form' />
        )

        const password = getByPlaceholderText('Password')
        const confirmPassword = getByPlaceholderText('Confirm password')
        const button = getByText(/Change password/i)

        fireEvent.change(password, { target: { value: 'ZAQ!2wsx'} })
        fireEvent.change(confirmPassword, { target: { value: 'ZAQ!2wsx'} })
        fireEvent.click(button)

        await waitFor(() => { 
            expect(getByTestId(/spinner/i)).toBeInTheDocument();
        })
        
    })
})
  