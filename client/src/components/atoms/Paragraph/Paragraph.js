import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ footer, theme }) => (footer ? theme.color.footer : theme.color.silver)};
  line-height: 19px;
`;
