import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, waitFor} from '@testing-library/react';
import { renderWithRouter } from 'testUtils';
import ForgotPasswordForm from 'components/molecules/ForgotPasswordForm/ForgotPasswordForm';


describe('ForgotPasswordForm Component', () => {
    it('should show errors if input is empty', async () => {
        const { getByPlaceholderText, container } = renderWithRouter(
            <ForgotPasswordForm />
        )

        const email = getByPlaceholderText('Email')
        
        expect(container).not.toHaveTextContent(/required/i)

        fireEvent.click(email);
        fireEvent.blur(email);

        await waitFor(() => {
            expect(container).toHaveTextContent(/required/i)
        })
    })

    it('should show errors if email is not a valid email', async () => {
        const { getByPlaceholderText, container } = renderWithRouter(
            <ForgotPasswordForm />
        )

        const email = getByPlaceholderText('Email')
        
        expect(container).not.toHaveTextContent(/email must be a valid email/i)

        fireEvent.click(email);
        fireEvent.change(email, { target: { value: 'example-email'} });
        fireEvent.blur(email);

        await waitFor(() => {
            expect(container).toHaveTextContent(/email must be a valid email/i)
        })
    })


    it('should not show errors if email is validate', async () => {
        const { getByPlaceholderText, container } = renderWithRouter(
            <ForgotPasswordForm />
        )

        const email = getByPlaceholderText('Email')
        
        fireEvent.click(email);
        fireEvent.change(email, { target: { value: 'example-email@gmail.com'} });
        fireEvent.blur(email);

        await waitFor(() => {
            expect(container).not.toHaveTextContent(/email must be a valid email/i)
        })
    })

    it('should show alert on click', async () => {
        const { getByPlaceholderText, getByText, container } = renderWithRouter(
            <ForgotPasswordForm />
        )

        const email = getByPlaceholderText('Email')
        const button = getByText(/send/i)
        
        expect(container).not.toHaveTextContent(/unable to perform/i)

        fireEvent.click(email);
        fireEvent.change(email, { target: { value: 'example-email@gmail.com'} });
        fireEvent.click(button);

        await waitFor(() => {
            expect(container).toHaveTextContent(/unable to perform/i)
        })
    })
});