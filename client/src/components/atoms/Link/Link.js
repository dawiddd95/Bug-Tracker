import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const StyledLink = styled(Link)`
	color: ${({ color, theme }) => color ? theme.primary : theme.colors.grayDark};
	font-size: 14px;
	font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.weight400};
	text-decoration: none;
	transition: 0.3s;

	:hover {
		color: ${({ theme }) => theme.primary};
		transition: 0.3s;
	}

  	${({ button }) => button && css`
	  	align-items: center;
		background-color: ${({ background, theme }) => background || theme.primary};
		background-image: url(${({ icon }) => icon});
		border: 0;
		border-radius: 4px;
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
			background-color: ${({ theme }) => lighten('0.1', theme.primary)};
			color: ${({ color, theme }) => color || theme.primary};
			transition: 0.3s;
		}
	`}
`;
