import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Atoms/Input', module)
  .add('Normal', () => <Input placeholder="Your name" width="300px" />)
  // Dodajemy input w wersji search
  .add('Search', () => <Input placeholder="Enter keywords to search..." search width="300px" />)
  // Dodajemy input w wersji Footer
  .add('Footer', () => <Input placeholder="Your email address" footer />);
