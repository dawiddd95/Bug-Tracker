import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  height: 32px;
  padding: 0 15px;
  background-color: ${({ background, theme }) => background || theme.background.primary};
  background-image: url(${({ icon }) => icon});
  color: ${({ color, theme }) => color || theme.color.primary};
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
    background-color: ${({ background, theme }) => background ? lighten('0.1', background) : theme.background.primary};
    transition: 0.3s;
  }

  ${({ fancy }) =>
    fancy &&
    css`
      color: ${({ theme }) => theme.background.grayDark};
      background-color: ${({ theme }) => theme.background.white};
      border: ${({ theme }) => theme.border.primary};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.secondary};
      background-color: ${({ theme }) => theme.background.gray};
      border: ${({ theme }) => theme.border.primary};

      :hover {
        background-color: ${({ theme }) => theme.background.gray};
        cursor: not-allowed;
      }
    `}
`;
