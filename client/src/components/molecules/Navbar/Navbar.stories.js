import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';

// Stories molekuły to po prostu wywołanie komponentu, ew. z propsami jeśli jakieś przyjmuje
storiesOf('Molecules/Navbar', module)
  .add('Navbar', () => <Navbar />)
