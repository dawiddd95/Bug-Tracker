import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 20px;
  color: ${({ color }) => color || 'rgba(0,0,0,0.85)'};
  font-weight: ${({ theme }) => theme.fontWeight.weight500};
`;
