import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.weight400};
  color: ${({ footer, theme }) => (footer ? theme.color.footer : theme.color.secondary)};
  text-decoration: none;
  transition: 0.3s;

  :hover {
    transition: 0.3s;
  }

  ${({ navbar, theme }) =>
    navbar &&
    css`
      :hover {
        color: ${theme.background.primary};
        border-bottom: 1px solid ${theme.background.primary};
      }
    `}

  ${({ textHover, theme }) =>
    textHover &&
    css`
      :hover {
        color: ${theme.background.primary};
      }
    `}

    ${({ footer, theme }) =>
    footer &&
    css`
      :hover {
        margin: 0 0 0 20px;
        color: ${theme.background.primary};
        border-bottom: 1px dotted ${theme.background.primary};
      }
    `}
`;
