import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header';

storiesOf('Atoms/Header', module)
  .add('Normal', () => <Header>Bug Tracker</Header>)
  .add('Color', () => <Header color="red">Bug Tracker</Header>)
  .add('Big', () => <Header big>Bug Tracker</Header>);
