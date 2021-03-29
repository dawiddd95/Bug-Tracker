import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme';
import { StyledLink } from './Link';

// Tworzymy tło, bo chcę widzieć jak paragraph wygląda na tle stopki
const FooterBackground = styled.div`
  width: 90%;
  height: auto;
  padding: 40px;
  background: ${theme.background.footerLight};
`;

storiesOf('Atoms/Link', module)
  .add('Navbar', () => (
    <StyledLink fontWeight={theme.fontWeight.weight600} navbar>
      FEATURES
    </StyledLink>
  ))
  .add('Footer', () => (
    <FooterBackground>
      <StyledLink footer>Los Angeles - USA</StyledLink>
    </FooterBackground>
  ))
  .add('Text Link', () => <StyledLink textHover>Forgot Your Password?</StyledLink>);
