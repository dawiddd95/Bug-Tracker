import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme';
import { Strong } from './Strong';

// Tworzymy tło, bo chcę widzieć jak paragraph wygląda na tle stopki
const FooterBackground = styled.div`
  width: 90%;
  height: auto;
  padding: 40px;
  background: ${theme.background.footerLight};
`;

storiesOf('Atoms/Strong', module)
  .add('Normal', () => <Strong>Registered Customers</Strong>)
  .add('Large', () => <Strong large>New Arrivals</Strong>)
  .add('Footer', () => (
    <FooterBackground>
      <Strong color={theme.color.primary} footer>
        customer service
      </Strong>
    </FooterBackground>
  ));
