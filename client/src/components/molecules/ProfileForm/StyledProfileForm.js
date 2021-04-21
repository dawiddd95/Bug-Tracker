import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { Button } from 'components/atoms/Button/Button';
import { Span } from 'components/atoms/Span/Span';

export const StyledForm = styled(Form)`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 50%;

    @media (max-width: 1022px) {
		width: 95%;
    }
`;

export const FormError = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
    margin: -10px auto 10px 0;
`

export const StyledSpan = styled(Span)`
    margin: 10px auto 5px 0;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    width: 100%;

    @media (max-width: 400px) {
		flex-direction: column;
        justify-content: space-between;
        height: 100px;
    }
`

export const StyledButton = styled(Button)`
    background-color: ${({ background }) => background};
    font-size: 14px;
    height: 40px;
    margin-right: 20px;
    padding: 0 20px;

    :hover {
        background-color: ${({ background }) => background};
    }
`