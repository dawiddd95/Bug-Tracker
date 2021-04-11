import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { Strong } from 'components/atoms/Strong/Strong';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 65px 0 0 200px;
    background-color: #f0f2f5;
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

export const ButtonsWrapper = styled.div`
	width: 360px;
	margin: 20px 0 40px 0;
	display: flex;
	justify-content: space-between;
`

export const DetailsWrapper = styled.div`
    width: 100%;
    margin: 40px 60px 60px 60px;

    display: flex;
    flex-direction: column;
`

export const DetailsRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledStrong = styled(Strong)`
    width: 200px;
    margin-right: 20px;
    text-align: right;
`

export const Link = styled(StyledLink)`
 	margin-right: 20px;
`