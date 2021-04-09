import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const StyledLink = styled(Link)`
	font-size: 14px;
	font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.weight400};
	color: ${({ color, theme }) => color ? theme.background.primary : theme.background.grayDark};
	text-decoration: none;
	transition: 0.3s;

	:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.background.primary};
	}

  	${({ button}) => button && css`
		height: 32px;
		padding: 0 15px;
		background-color: ${({ background, theme }) => background || theme.background.primary};
		background-image: url(${({ icon }) => icon});
		color: ${({ color, theme }) => color || theme.color.primary};
		border: 0;
		border-radius: 4px;
		font-weight: ${({ theme }) => theme.fontWeight.weight500};
		outline: 0;
		cursor: pointer;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.3s;

		:hover {
			background-color: ${({ background, theme }) => background ? lighten('0.1', background) : theme.background.primary};
			color: ${({ color, theme }) => color || theme.color.primary};
			transition: 0.3s;
		}
	`}
`;
