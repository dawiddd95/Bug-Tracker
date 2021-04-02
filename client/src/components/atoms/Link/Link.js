import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;
