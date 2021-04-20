import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { Button } from 'components/atoms/Button/Button';
import { Span } from 'components/atoms/Span/Span';

export const StyledForm = styled(Form)`
    width: 50%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormError = styled(ErrorMessage)`
    margin: -10px auto 10px 0;
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
`

export const StyledSpan = styled(Span)`
    margin: 10px auto 5px 0;
`

export const ButtonsWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
`

export const StyledButton = styled(Button)`
    margin-right: 20px;
    padding: 0 20px;
    height: 40px;
    font-size: 14px;
    background-color: ${({ background }) => background};

    :hover {
        background-color: ${({ background }) => background};
    }
`