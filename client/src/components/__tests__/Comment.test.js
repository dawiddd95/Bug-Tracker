import React from 'react';
import { renderWithRouter } from 'testUtils';
import Comment from 'components/molecules/Comment/Comment';


describe('Comment Component', () => {
    it('Renders children text', () => {
        const { getByText } = renderWithRouter(
            <Comment comment={{ id: 1, content: 'Comment #1', author: { name: 'Lidia', surname: 'Novak' } }} />
        )

        expect(getByText(/Comment #1/i)).toBeInTheDocument()
        expect(getByText(/Lidia/i)).toBeInTheDocument()
        expect(getByText(/Novak/i)).toBeInTheDocument()
    });
});