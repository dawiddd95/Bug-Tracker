import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 65px 0 0 200px;
    background-color: #f0f2f5;
    overflow-x: hidden;
`;

export const Breadcrumb = styled.div`
    width: 95%;
    margin: 40px auto 0 auto;
`

export const StyledSpan = styled(Span)`
    margin: 0 5px;
`

export const InnerWrapper = styled.div`
    width: 95%;
    margin: 16px auto;
    padding: 24px;
    background-color: ${({ theme }) => theme.background.white};
    border-radius: 5px;
    height: 100%;
`;