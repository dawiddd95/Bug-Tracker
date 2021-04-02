import styled from 'styled-components';
import { Form } from 'formik';
import { Span } from 'components/atoms/Span/Span';
import { Strong } from 'components/atoms/Strong/Strong';
import { Button } from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledSpan = styled(Span)`
    color: ${({ theme }) => theme.background.primary};
`

export const StyledStrong = styled(Strong)`
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
`

export const StyledButton = styled(Button)`
    width: 100%;
    height: 40px;
    font-size: 14px;
`