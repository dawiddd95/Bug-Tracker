import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';

export const Wrapper = styled.div`
	background-color: #f0f2f5;
	min-height: 100vh;
	overflow-x: hidden;
	padding: 65px 0 0 200px;
	width: 100%;
`;

export const Breadcrumb = styled.div`
	margin: 40px auto 0 auto;
	width: 95%;
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