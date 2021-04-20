import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
	height: 32px;
	padding: 0 15px;
	background-color: ${({ background, theme }) => background || theme.primary};
	background-image: url(${({ icon }) => icon});
	color: ${({ color, theme }) => color || theme.colors.white};
	border: 0;
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	font-weight: ${({ theme }) => theme.fontWeight.weight500};
	outline: 0;
	cursor: pointer;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;

	:hover {
		background-color: ${({ background, theme }) => background ? lighten('0.1', background) : lighten('0.1', theme.primary)};
		color: ${({ color, theme }) => color || theme.colors.white};
		transition: 0.3s;
	}

	${({ fancy }) =>
		fancy &&
		css`
		color: ${({ theme }) => theme.colors.grayDark};
		background-color: ${({ theme }) => theme.colors.white};
		border: ${({ theme }) => theme.border};

		:hover {
			background-color: ${({ theme }) => theme.colors.white};
			color: ${({ theme }) => theme.colors.grayDark};
			transition: 0.3s;
		}
	`}

	${({ disabled }) =>
		disabled &&
		css`
		color: ${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.gray};
		border: ${({ theme }) => theme.border};

		:hover {
			background-color: ${({ theme }) => theme.colors.gray};
			cursor: not-allowed;
		}
	`}
`;
