import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input } from 'components/atoms/Input/Input';
import * as Yup from 'yup';
import Alert from '../Alert/Alert';
import * as S from './StyledForgotPasswordForm';



const ForgotPasswordForm = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <>
            {isSubmit && <Alert type="error" txt="We are temporarily unable to perform this operation" />}
            <Formik
                initialValues={{ 
                    email: ''
                }}
                onSubmit={() => {
                    setIsSubmit(true);
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
