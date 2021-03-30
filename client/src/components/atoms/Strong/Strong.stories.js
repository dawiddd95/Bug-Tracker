import React from 'react';
import { storiesOf } from '@storybook/react';
import { Strong } from './Strong';

storiesOf('Atoms/Strong', module)
  .add('Normal', () => <Strong>Registered Customers</Strong>)
  .add('Large', () => <Strong large>New Arrivals</Strong>)
