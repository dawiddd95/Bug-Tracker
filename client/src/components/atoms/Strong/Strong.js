import styled, { css } from 'styled-components';

export const Strong = styled.strong`
	color: black;
	font-size: 14px;
	line-height: 29px;

	${({ large }) =>
		large &&
		css`
		font-size: 25px;
		line-height: 40px;
	`}
`;
