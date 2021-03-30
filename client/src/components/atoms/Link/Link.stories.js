import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledLink } from './Link';

storiesOf('Atoms/Link', module)
  .add('Link', () => <StyledLink textHover>Forgot Your Password?</StyledLink>);
