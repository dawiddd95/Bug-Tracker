import styled from 'styled-components';
import { Form, ErrorMessage, } from 'formik';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

export const StyledForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormError = styled(ErrorMessage)`
    margin: -10px auto 10px 0;
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
`

export const StyledInput = styled(Input)`
    padding-top: 10px;
    min-height: 100px;
`

export const StyledButton = styled(Button)`
    height: 40px;
    margin-right: auto;
    font-size: 14px;
`