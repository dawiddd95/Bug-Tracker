import styled, { css } from 'styled-components';

export const Strong = styled.strong`
  /* Dzięki temu uwzględnimy kolor biały stronga z footer, a domyślnie damy ten czarny */
  color: ${({ color }) => color || '#222'};
  font-size: 20px;
  line-height: 29px;
  font-weight: ${({ theme }) => theme.fontWeight.weight500};
  text-transform: ${({ footer }) => (footer ? 'uppercase' : 'none')};

  /* Jeśli mamy x >= 2 warunkowe to lepiej dać w css  */
  ${({ large }) =>
    large &&
    css`
      font-size: 25px;
      line-height: 40px;
      font-weight: ${({ theme }) => theme.fontWeight.weight600};
    `}
`;
