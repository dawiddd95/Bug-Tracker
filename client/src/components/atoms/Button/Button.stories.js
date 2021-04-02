import React from 'react';
import { storiesOf } from '@storybook/react';
import { theme } from 'theme/mainTheme';
import newIcon from 'assets/icons/new.svg';
import binIcon from 'assets/icons/bin.svg';
import { Button } from './Button';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

storiesOf('Atoms/Button', module)
  .add('Primary', () => <Button background={theme.background.primary}>New</Button>)
  .add('Another Color', () => <Button background={theme.background.lime}>New</Button>)
  .add('Button With Icon', () => (
    <Button background={theme.background.gold}>
      <ButtonIcon src={newIcon} />
      New
    </Button>
  ))
  .add('Disabled Button', () => (
    <Button background={theme.background.white} disabled>
      Delete
    </Button>
  ))
  .add('Disabled Button With Icon', () => (
    <Button background={theme.background.white} disabled>
      <ButtonIcon src={binIcon} />
      Delete
    </Button>
  ))
  .add('Fancy Button', () => (
    <Button fancy background={theme.background.white}>
      Delete
    </Button>
  ))
  .add('Fancy Button With Icon', () => (
    <Button fancy background={theme.background.white}>
      <ButtonIcon src={binIcon} />
      Delete
    </Button>
  ))
  .add('Transparent', () => (
    <Button background={theme.background.transparent} color={theme.color.secondary}>
      Users
    </Button>
  ));
