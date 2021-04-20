import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    width: 50%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormError = styled(ErrorMessage)`
    margin: -10px auto 10px 0;
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
`

export const StyledButton = styled(Button)`
    width: 100%;
    height: 40px;
    font-size: 14px;
`