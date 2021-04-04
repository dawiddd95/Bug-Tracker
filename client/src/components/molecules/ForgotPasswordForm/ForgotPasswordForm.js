import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/atoms/Input/Input';
import * as S from './StyledForgotPasswordForm';


const ForgotPasswordForm = () => {
    return (
        <>
            <Formik
                initialValues={{ 
                    email: ''
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup
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
                    <S.FormError name="email" component="span" />
                    <S.StyledButton 
                        type="submit" 
                        backround="white"
                    >
                        Send password reset email
                    </S.StyledButton>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default ForgotPasswordForm;
