import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './Alert';

storiesOf('Molecules/Alert', module)
  .add('Error', () => (
    <Alert type="error" txt="We are temporarily unable to perform this operation" />
  ))
  .add('Success', () => (
    <Alert
      type="success"
      txt="Settings saved successfully. The page will reload in 3 seconds for changes to take effect."
    />
  ));
