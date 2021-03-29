import styled from 'styled-components';

export const Header = styled.h1`
  color: ${({ color }) => color || 'rgba(0,0,0,0.85)'};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.weight500};
`;
