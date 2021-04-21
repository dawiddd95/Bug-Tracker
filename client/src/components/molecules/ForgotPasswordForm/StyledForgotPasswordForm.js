import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { ReactSelect } from 'components/atoms/Select/Select';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledReactSelect = styled(ReactSelect)`
    font-size: 12px;
    height: 40px;
    margin-bottom: 40px;
    width: 100%;
`

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