import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/atoms/Input/Input';
import * as S from './StyledSignupForm';

const SignupForm = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}

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
 
export default SignupForm;
