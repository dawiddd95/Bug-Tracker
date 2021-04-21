import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';
import { Header } from 'components/atoms/Header/Header';

export const Wrapper = styled.div`
	background-color: #f0f2f5;
	min-height: 100vh;
	padding: 65px 0 0 200px;
	overflow-x: hidden;
	width: 100%;
`;

export const Breadcrumb = styled.div`
	margin: 40px auto 0 auto;
	width: 95%;
`

export const StyledSpan = styled(Span)`
  	margin-left: 5px;
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
	margin-top: 20px;
	width: 420px;
`

export const SearchWrapper = styled.div`
	border: ${({ theme }) => `1px solid ${theme.colors.border}`};
	border-radius: 5px;
	margin: 30px 0 0 0;
	padding: 30px;
`

export const StyledHeader = styled(Header)`
 	margin-bottom: 30px;
`