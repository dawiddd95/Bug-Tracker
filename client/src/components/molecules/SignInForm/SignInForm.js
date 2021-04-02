import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { theme } from 'theme/mainTheme';
import { Input } from 'components/atoms/Input/Input';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import * as S from './StyledSignInForm';


const SignInForm = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}
    const [signInAs, setSignInAs] = useState('Admin');

    const onClickBtn = signAs => {
        setSignInAs(signAs);
    }

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    // Tutaj logika do fetcha
                    // axios.post, zmiany stanów etc.  
                    return values;
                }}
                // Walidacja formika z Yup
                validationSchema={Yup.object().shape({
                    email: Yup
                       .string()
                       .email()
                       .required('Email is required'),
                    password: Yup
                       .string()
                       .email()
                       .required('Email is required'),
                 })}
            >
            {({ handleSubmit }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <S.InnerWrapper>
                        <S.StyledSpan>
                            Sign in as: <S.StyledStrong>{signInAs}</S.StyledStrong> 
                        </S.StyledSpan>
                        <StyledLink to='/forgot-password' color>Forgot your password?</StyledLink>
                    </S.InnerWrapper>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <S.SignInAsWrapper>
                        <Span>
                            Sign in as:
                        </Span>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Admin')}
                        >
                            Admin
                        </Button>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Project Leader')}
                        >
                            Project Leader
                        </Button>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Developer')}
                        >
                            Developer
                        </Button>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Submitter')}
                        >
                            Submitter
                        </Button>
                    </S.SignInAsWrapper>
                    <S.StyledButton 
                        type="submit" 
                        backround="white"
                    >
                        Sign in
                    </S.StyledButton>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default SignInForm;