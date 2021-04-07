import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { singupApi } from 'utils/api';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import Alert from '../Alert/Alert';
import * as S from './StyledSignUpForm';


const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);
        
        const response = await axios.post(singupApi, values);
        const {data} = response;
        
        setIsLoading(false);
        setSuccess(data.success);
        setMessage(data.msg);
        setAlert(true);
    }

    return (
        <>
            {alert && <Alert type={isSuccess ? "success" : "error"} txt={message} />}
            <Formik
                initialValues={{ 
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    type: 'Admin'
                }}
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={Yup.object().shape({
                    name: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Name is required'),
                    surname: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Surname is required'),
                    email: Yup
                       .string()
                       .email()
                       .required('Email is required'),
                    password: Yup
                       .string()
                       .min(8, 'Minimum 8 characters')
                       .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
                       .matches(/^(?=.*[0-9])/, 'Must contain at least one numeric character')
                       .matches(/^(?=.*[!@#$%^&*()])/, 'Must contain at least one special character')
                       .required('Password is required'),
                    confirmPassword: Yup
                       .string()
                       .required('Password must match')
                       .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                 })}
            >
            {({ handleSubmit, handleChange }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <S.FormError name="name" component="span" />
                    <Input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                    />
                    <S.FormError name="surname" component="span" />
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
                    <Input 
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                    />
                    <S.FormError name="confirmPassword" component="span" />
                    <Input name="type" as="select" onChange={handleChange}>
                        <option value="Admin">Admin</option> 
                        <option value="ProjectLeader">Project Leader</option> 
                        <option value="Developer">Developer</option> 
                        <option value="Submitter">Submitter</option> 
                    </Input>
                    <S.StyledButton 
                        type="submit" 
                        backround="white"
                        disabled={isLoading}
                    >
                        {isLoading && <Spinner />}
                        Sign up
                    </S.StyledButton>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default SignUpForm;
