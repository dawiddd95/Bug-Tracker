import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes/index';
import { Input } from 'components/atoms/Input/Input';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import * as S from './StyledSignInForm';


const SignInForm = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}
    const [signInAs, setSignInAs] = useState('Admin');
    const [demoUserEmail, setDemoUserEmail] = useState('dawlyc1995@gmail.com');
    const [demoUserPassword, setDemoUserPassword] = useState('ZAQ!2wsx');

    const onClickBtn = (signAs, email) => {
        setSignInAs(signAs);
        setDemoUserEmail(email);
        setDemoUserPassword('ZAQ!2wsx');
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{ 
                    email: demoUserEmail, 
                    password: demoUserPassword 
                }}
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
                            onClick={() => onClickBtn('Admin', 'dawlyc1995@gmail.com')}
                        >
                            Admin
                        </Button>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Project Leader', 'wpolanska@gmail.com')}
                        >
                            Project Leader
                        </Button>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Developer', 'jjablonska@gmail.com')}
                        >
                            Developer
                        </Button>
                        <Button 
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Submitter', 'jjastrzebska@gmail.com')}
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
                    <S.InnerWrapper>
                        <S.StyledSpan>
                            You sign in as: <S.StyledSpan underline>{signInAs}</S.StyledSpan>
                        </S.StyledSpan>
                        <StyledLink to={routes.forgotPassword} color>Forgot your password?</StyledLink>
                    </S.InnerWrapper>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default SignInForm;