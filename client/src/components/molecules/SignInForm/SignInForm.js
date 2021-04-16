import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes/index';
import actions from 'app/users/actions';
import { Input } from 'components/atoms/Input/Input';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import { signinApi } from 'utils/api';
import Alert from '../Alert/Alert';
import * as S from './StyledSignInForm';

const SignInForm = () => {
    const dispatch = useDispatch()
    const [signInAs, setSignInAs] = useState('Admin');
    const [demoUserEmail, setDemoUserEmail] = useState('dawlyc1995@gmail.com');
    const [demoUserPassword, setDemoUserPassword] = useState('ZAQ!2wsx');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const onClickBtn = (signAs, email) => {
        setSignInAs(signAs);
        setDemoUserEmail(email);
        setDemoUserPassword('ZAQ!2wsx');
    }

    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);

        try {
            const response = await axios.post(signinApi, values)
            const {data} = response
            
            dispatch(actions.loggedUser(data.user))

            if(data.success) {
                sessionStorage.setItem('session', true)
                sessionStorage.setItem('type', data.user.type)
            }
            
            setIsLoading(false);
            setSuccess(data.success);
            setMessage(data.msg);
            setAlert(true);
        } catch (error) {
            setAlert(true);
            setSuccess(false);
            setIsLoading(false);

            if(error.response.status === 400) setMessage('400 (Invalid Token)')
            if(error.response.status === 401) setMessage('401 (Unauthorized)')
            if(error.response.status === 403) setMessage('403 (Forbidden) Not allowed to continue this operation')
            if(error.response.status === 500) setMessage(`500 (Internal Server Error) ${error.response.data }`)
        }
    }

    return (
        <>
            {alert && <Alert type="error" txt={message} />}
            {isSuccess && <Redirect to={routes.dashboard} />}
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
                            type="button"
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Admin', 'dawlyc1995@gmail.com')}
                        >
                            Admin
                        </Button>
                        <Button 
                            type="button"
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Project Leader', 'wpolanska@gmail.com')}
                        >
                            Project Leader
                        </Button>
                        <Button 
                            type="button"
                            background={theme.background.transparent}
                            color={theme.background.primary}
                            onClick={() => onClickBtn('Developer', 'jjablonska@gmail.com')}
                        >
                            Developer
                        </Button>
                        <Button 
                            type="button"
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