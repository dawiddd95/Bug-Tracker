import styled from 'styled-components';
import { Span } from 'components/atoms/Span/Span';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
	background-color: #f0f2f5;
	min-height: 100vh;
	overflow-x: hidden;
	padding: 65px 0 0 200px;
	width: 100%;

	@media (max-width: 1022px) {
		padding: 0;
        position: static;
    }
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

export const StyledHeader = styled(Header)`
 	margin-bottom: 30px;
`

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 40px;
`

export const StyledButton = styled(Button)`
	font-size: 20px;
	height: 150px;
	margin: 0 20px 20px 0;
	width: 300px;
`