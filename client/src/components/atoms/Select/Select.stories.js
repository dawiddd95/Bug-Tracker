import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReactSelect } from './Select';

storiesOf('Atoms/Select', module)
  .add('Normal', () => <ReactSelect>
      <option value="1">Audi</option>
      <option value="1">Skoda</option> 
      <option value="1">Toyota</option> 
      <option value="1">Volvo</option>     
      <option value="1">Enjoyable Shopping Experience !!! </option>
  </ReactSelect>)