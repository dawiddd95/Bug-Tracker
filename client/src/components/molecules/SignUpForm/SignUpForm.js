import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import * as S from './StyledSignUpForm';

const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'ProjectLeader', label: 'Project Leader' },
    { value: 'Developer', label: 'Developer' },
    { value: 'Submitter', label: 'Submitter' },
];


const SignUpForm = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}
    const [selectedOption, setSelectedOption] = useState({ value: 'Admin', label: 'Admin' });
    const [isLoading, setIsLoading] = useState(false);

    const change = selected => {
        setSelectedOption(selected);
    };

    const handleOnSubmit = values => {
        console.log(values)
        // Tutaj logika do fetcha
        // axios.post, zmiany stanów etc.  
        // setIsSubmit(true);
        // zmiana loading
        // wysłanie na server
        // po wysłaniu loading na false
        setIsLoading(true);

        setInterval( () => setIsLoading(false), 3000);
    }

    return (
        <>
            <Formik
                initialValues={{ 
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
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
            {({ handleSubmit }) => (
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
                    <S.StyledReactSelect 
                        value={selectedOption} 
                        options={options} 
                        onChange={() => change()} 
                    />
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
