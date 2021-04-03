import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ theme }) => theme.background.grayDark};
  font-size: 14px;
  text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
`;
