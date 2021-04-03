import styled from 'styled-components';

export const Header = styled.h1`
  font-size: ${({ big }) => big ? '32px' : '20px'};
  color: ${({ color }) => color || 'rgba(0,0,0,0.85)'};
`;
