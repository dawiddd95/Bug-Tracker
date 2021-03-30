import styled, { css } from 'styled-components';

export const Strong = styled.strong`
  color: black;
  font-size: 20px;
  line-height: 29px;
  font-weight: ${({ theme }) => theme.fontWeight.weight500};

  ${({ large }) =>
    large &&
    css`
      font-size: 25px;
      line-height: 40px;
      font-weight: ${({ theme }) => theme.fontWeight.weight600};
    `}
`;
