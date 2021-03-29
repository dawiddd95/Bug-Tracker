import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: ${({ width }) => width || '50%'};
  height: 30px;
  padding: 15px 20px;
  font-weight: ${({ theme }) => theme.fontWeight.weight200};
  /* Że ma brać color z thema */
  border: ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: transparent;
  outline: 0;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.secondary};
  }

  ${({ search }) =>
    search &&
    css`
      border: 0;
      border-radius: 0;
      background-color: transparent;
    `}

  ${({ footer }) =>
    footer &&
    css`
      padding: 20px;
      border: 1px solid #49494d;
      border-radius: 22px;
      background-color: #49494d;
      color: ${({ theme }) => theme.color.primary};

      ::placeholder {
        color: ${({ theme }) => theme.color.primary};
      }
    `}
`;
