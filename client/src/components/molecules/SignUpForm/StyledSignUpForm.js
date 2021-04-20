import styled, { css } from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { ReactSelect } from 'components/atoms/Select/Select';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledReactSelect = styled(ReactSelect)`
    width: 100%;
    height: 40px;
    margin-bottom: 40px;
    font-size: 12px;
`

export const FormError = styled(ErrorMessage)`
    margin: -10px auto 10px 0;
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
`

export const StyledButton = styled(Button)`
    width: 100%;
    height: 40px;
    font-size: 14px;

    ${({ disabled }) =>
		disabled &&
		css`
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.primary};
		
		:hover {
			background-color: ${({ theme }) => theme.primary};
			cursor: not-allowed;
		}
	`}
`