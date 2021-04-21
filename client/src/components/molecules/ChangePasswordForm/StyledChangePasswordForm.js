import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 50%;
`;

export const FormError = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
    margin: -10px auto 10px 0;
`

export const StyledButton = styled(Button)`
    font-size: 14px;
    height: 40px;
    width: 100%;
`