import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Paragraph } from './Paragraph';

// Tworzymy tło, bo chcę widzieć jak paragraph wygląda na tle stopki
const FooterBackground = styled.div`
  width: 90%;
  height: auto;
  padding: 40px;
  background: ${({ theme }) => theme.background.footerDark};
`;

storiesOf('Atoms/Paragraph', module)
  // Dodajemy dekorator naszego tła, DLA WSZYSTKICH STORIES
  // .addDecorator(story => <FooterBackground>{story()}</FooterBackground>)
  .add('Normal', () => (
    <Paragraph>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium,
      totam rem aperiam eaque ipsa quae ab illo inventore.
    </Paragraph>
  ))
  .add('Footer', () => (
    // Jeśli chcemy dekorator tylko dla konkretnych stories to po prostu Wrappujemy je w ten dekorator oddzielnie
    <FooterBackground>
      <Paragraph footer>
        Lorem ipsum dolor sit amet, consectetu adipiscing elite sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua quis ipsum suspendisse.
      </Paragraph>
    </FooterBackground>
  ));
