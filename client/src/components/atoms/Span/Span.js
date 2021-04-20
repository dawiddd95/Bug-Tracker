import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 14px;
  text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
`;
