import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router';
import { routes } from 'routes/index';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import { adminApi } from 'utils/api';
import Alert from '../Alert/Alert';
import * as S from './StyledChangePasswordForm';

const ChangePasswordForm = ({id}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);
        
        const response = await axios.post(adminApi, values)
        const {data} = response
        
        if(data.success) {
            setMessage('Change password successfully!');
            setTimeout(() => setRedirect(true), 5000)
        }
        
        setIsLoading(false);
        setSuccess(data.success);
        setAlert(true);
    }

    return (
        <>
            {alert && <Alert type={isSuccess} txt={message} />}
            {redirect && <Redirect to={routes.user} />}
            <Formik
                initialValues={{ 
                    id,
                    password: '',
                    confirmPassword: '' 
                }}
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={Yup.object().shape({
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
                    <S.StyledButton 
                        type="submit"
                        disabled={isLoading} 
                    >
                        {isLoading && <Spinner />}
                        Change password
                    </S.StyledButton>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
ChangePasswordForm.propTypes = {
    id: PropTypes.number.isRequired
}

export default ChangePasswordForm;