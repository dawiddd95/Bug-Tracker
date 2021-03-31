import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import AccountMenu from './AccountMenu';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

storiesOf('Molecules/AccountMenu', module).add('AccountMenu', () => (
  <Background>
    <AccountMenu />
  </Background>
));
