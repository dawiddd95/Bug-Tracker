import React from 'react';
import { storiesOf } from '@storybook/react';
import { Span } from './Span';

storiesOf('Atoms/Paragraph', module)
  // Dodajemy dekorator naszego tła, DLA WSZYSTKICH STORIES
  // .addDecorator(story => <FooterBackground>{story()}</FooterBackground>)
  .add('Normal', () => (
    <Span>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium,
      totam rem aperiam eaque ipsa quae ab illo inventore.
    </Span>
  ))