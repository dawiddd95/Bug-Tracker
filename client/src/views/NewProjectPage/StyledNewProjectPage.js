import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';

export const Wrapper = styled.div`
    background-color: #f0f2f5;
    min-height: 100vh;
    padding: 65px 0 0 200px;
    width: 100%;
`;

export const Breadcrumb = styled.div`
    margin: 40px auto 0 auto;
    width: 95%;
`

export const StyledSpan = styled(Span)`
    margin: 0 5px;
`

export const InnerWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    height: 100%;
    margin: 16px auto;
    padding: 24px;
    width: 95%;
`;

export const FormWrapper = styled.div`
    border: 1px solid;
    border: 0;
    margin: 30px;
    padding: 30px;
    width: 50%;
`