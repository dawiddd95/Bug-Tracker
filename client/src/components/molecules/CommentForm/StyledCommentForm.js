import styled from 'styled-components';
import { Form, ErrorMessage, } from 'formik';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

export const StyledForm = styled(Form)`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FormError = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
    margin: -10px auto 10px 0;
`

export const StyledInput = styled(Input)`
    min-height: 100px;
    padding-top: 10px;
`

export const StyledButton = styled(Button)`
    font-size: 14px;
    height: 40px;
    margin-right: auto;
`