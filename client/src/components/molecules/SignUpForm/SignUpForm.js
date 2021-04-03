import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/atoms/Input/Input';
import { ReactSelect } from 'components/atoms/Select/Select';
import * as S from './StyledSignUpForm';


const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'ProjectLeader', label: 'ProjectLeader' },
    { value: 'Developer', label: 'Developer' },
    { value: 'Submitter', label: 'Submitter' },
];

const SignUpForm = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}
    const [selectedOption, setSelectedOption] = useState({ value: 'Admin', label: 'Admin' });

    const change = (selected) => {
        setSelectedOption(selected);
    };

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
                    <Input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <ReactSelect value={selectedOption} onChange={() => change()} options={options} />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <Input 
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                    />
                    <S.StyledButton 
                        type="submit" 
                        backround="white"
                    >
                        Sign up
                    </S.StyledButton>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default SignUpForm;