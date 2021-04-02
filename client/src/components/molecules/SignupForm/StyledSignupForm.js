import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledButton = styled(Button)`
    width: 100%;
    height: 40px;
`