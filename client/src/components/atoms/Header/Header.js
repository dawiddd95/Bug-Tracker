import styled from 'styled-components';

export const Header = styled.h1`
	color: ${({ color }) => color || 'rgba(0,0,0,0.85)'};
  	font-size: ${({ big }) => big ? '32px' : '20px'};
`;
