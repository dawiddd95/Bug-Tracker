import styled from 'styled-components';
import { Form } from 'formik';
import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    margin: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

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

export const StyledSpan = styled(Span)`
    color: ${({ theme }) => theme.background.primary};
`

export const SignInAsWrapper = styled.div`
    margin: 0 auto 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

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
    width: 100%;
    height: 40px;
    font-size: 14px;
`