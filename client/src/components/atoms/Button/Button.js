import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
	align-items: center;
	background-color: ${({ background, theme }) => background || theme.primary};
	background-image: url(${({ icon }) => icon});
	border: 0;
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	color: ${({ color, theme }) => color || theme.colors.white};
	cursor: pointer;
	display: flex;
	font-size: 14px;
	font-weight: ${({ theme }) => theme.fontWeight.weight500};
	height: 32px;
	justify-content: center;
	outline: 0;
	padding: 0 15px;
	transition: 0.3s;

	:hover {
		background-color: ${({ background, theme }) => background ? lighten('0.1', background) : lighten('0.1', theme.primary)};
		color: ${({ color, theme }) => color || theme.colors.white};
		transition: 0.3s;
	}

	${({ fancy }) =>
		fancy &&
		css`
		background-color: ${({ theme }) => theme.colors.white};
		border: ${({ theme }) => theme.border};
		color: ${({ theme }) => theme.colors.grayDark};

		:hover {
			background-color: ${({ theme }) => theme.colors.white};
			color: ${({ theme }) => theme.colors.grayDark};
			transition: 0.3s;
		}
	`}

	${({ disabled }) =>
		disabled &&
		css`
		background-color: ${({ theme }) => theme.colors.gray};
		border: ${({ theme }) => theme.border};
		color: ${({ theme }) => theme.colors.secondary};

		:hover {
			background-color: ${({ theme }) => theme.colors.gray};
			cursor: not-allowed;
		}
	`}
`;
