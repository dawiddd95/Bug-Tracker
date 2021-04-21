import styled, { css } from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InnerWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    width: 100%;

    @media (max-width: 440px) {
        display: flex;
        flex-wrap: wrap;

        span {
            margin: 0 60px 0 0;
        }
    }

    @media (max-width: 435px) {
        span {
            margin-bottom: 20px;
        }
    }
`

export const FormError = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
    margin: -10px auto 10px 0;
`

export const StyledSpan = styled(Span)`
    color: ${({ theme }) => theme.primary};
`

export const SignInAsWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 20px 0;

    button {
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 440px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        span,
        button {
            margin-right: auto;
            padding: 0;
        }
    }
`

export const StyledButton = styled(Button)`
    height: 40px;
    font-size: 14px;
    width: 100%;

    ${({ disabled }) =>
		disabled &&
		css`
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.colors.white};
		
		:hover {
			background-color: ${({ theme }) => theme.primary};
			cursor: not-allowed;
		}
	`}
`