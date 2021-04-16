import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';
import { StyledLink } from 'components/atoms/Link/Link';

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
  	margin-left: 5px;
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
	width: 420px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`

export const StyledButton = styled(Button)`
	padding: 0;
	height: auto;
	margin: 10px 0;
`

export const Link = styled(StyledLink)`
 	margin-right: 20px;
`