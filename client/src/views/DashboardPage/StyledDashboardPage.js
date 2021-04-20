import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';

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

export const InnerWrapper = styled.div`
	width: 95%;
	margin: 16px auto;
	padding: 24px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	height: 100%;
`;

export const StyledHeader = styled(Header)`
 	margin-bottom: 30px;
`