import styled from 'styled-components';

export const Span = styled.span`
    color: ${({ color, theme }) => color ? theme.primary : theme.colors.grayDark};
    font-size: 14px;
    text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
`;
