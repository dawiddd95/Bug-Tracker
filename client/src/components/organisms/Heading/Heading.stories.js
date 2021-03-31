import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReactSelect } from 'components/atoms/Select/Select';
import Heading from './Heading';

const options = [
  { value: 'eng', label: 'eng' },
  { value: 'pl', label: 'pl' },
];

// Stories molekuły to po prostu wywołanie komponentu, ew. z propsami jeśli jakieś przyjmuje
storiesOf('Molecules/Heading', module).add('Heading', () => (
  <Heading>
    <ReactSelect options={options} />
  </Heading>
));
