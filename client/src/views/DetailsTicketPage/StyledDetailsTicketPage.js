import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';
import { Strong } from 'components/atoms/Strong/Strong';

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

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px 0 40px 0;
	width: 360px;
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 60px 60px 60px;
    width: 100%;
`

export const DetailsRow = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
`

export const StyledStrong = styled(Strong)`
    margin-right: 20px;
    text-align: right;
    width: 200px;
`