import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes/index';
import { Input } from 'components/atoms/Input/Input';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import * as S from './StyledSignInForm';



const SignInForm = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}
    const [signInAs, setSignInAs] = useState('Admin');
    const [demoUserEmail, setDemoUserEmail] = useState('dawlyc1995@gmail.com');
    const [demoUserPassword, setDemoUserPassword] = useState('ZAQ!2wsx');
    const [isLoading, setIsLoading] = useState(false);
    // Warunek, że jeśli nie jest null to pokazę alert, zamiast stosowania is submmit
    // const [error, setError] = useState(null);

    const onClickBtn = (signAs, email) => {
        setSignInAs(signAs);
        setDemoUserEmail(email);
        setDemoUserPassword('ZAQ!2wsx');
    }

    const handleOnSubmit = values => {
        console.log(values)
        // Tutaj logika do fetcha
        // axios.post, zmiany stanów etc.  
        // setIsLoading(true);
        // setError(null)
        // zmiana loading
        // wysłanie na server
        // po wysłaniu loading na false
        setIsLoading(true);

        setInterval( () => setIsLoading(false), 3000);
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{ 
                    email: demoUserEmail, 
                    password: demoUserPassword 
                }}
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={Yup.object().shape({
                    email: Yup
                       .string()
                       .email()
                       .required('Email is required'),
                    password: Yup
                       .string()
                       .required('Password is required'),
                })}
            >
            {({ handleSubmit }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <S.FormError name="email" component="span" />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <S.FormError name="password" component="span" />
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
                        disabled={isLoading} 
                    >
                        {isLoading && <Spinner />}
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