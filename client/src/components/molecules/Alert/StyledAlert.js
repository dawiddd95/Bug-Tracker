import styled from 'styled-components';

export const Wrapper = styled.div`
	background: ${({ theme }) => theme.colors.white};
	border-radius: 4px;
	box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
	display: flex;
	height: auto;
	line-height: 1.5;
	margin-bottom: 16px;
	margin-left: auto;
	overflow: hidden;
	padding: 16px 24px;
	position: relative;
	width: 400px;

	@media (max-width: 400px) {
		width: 100%;
    }
`;

export const Img = styled.img`
	height: 25px;
	margin-right: 20px;
	width: 25px;
`;
