import React from 'react';
import { renderWithRouter } from 'testUtils';
import Alert from 'components/molecules/Alert/Alert';


describe('Alert Component', () => {
    it('Renders children text', () => {
        const { getByText } = renderWithRouter(
            <Alert type='success' txt='Success!' />
        )

        expect(getByText('Success!')).toBeInTheDocument();
    });
});