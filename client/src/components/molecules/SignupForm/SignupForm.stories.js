import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import SignupForm from './SignupForm';

const Background = styled.div`
    width: 30%; 
    margin: 80px;
`


storiesOf('Molecules/SignupForm', module)
    .add('SignupForm', () => 
        <Background>
            <SignupForm />
        </Background>
    )
