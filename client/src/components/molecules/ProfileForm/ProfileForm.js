import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as Yup from 'yup';
import actions from 'app/users/actions';
import { ThemeContext } from 'context';
import { profileApi } from 'utils/api';
import { Formik } from 'formik';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import Alert from '../Alert/Alert';
import * as S from './StyledProfileForm';



const ProfileForm = () => {
    const dispatch = useDispatch()
    const {theme} = useContext(ThemeContext)
    const {loggedUser} = useSelector(state => state.users)
    const [editMode, setEditMode] = useState(false) 
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)


    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);
        
        const response = await axios.patch(`${profileApi}`, values);
        const {data} = response;

        if(data) {
            dispatch(actions.loggedUser(data))
            setSuccess(true);
            setMessage('Change success!');
            setEditMode(false)
        } else {
            setSuccess(false)
            setMessage('We are temporarily unable to perform this operation')
        }
        
        setIsLoading(false);
        setAlert(true);
    }

    return (
        <>
            {alert && <Alert type={isSuccess} txt={message} />}
            <Formik
                enableReinitialize
                initialValues={{ 
                    id: loggedUser.id,
                    type: loggedUser.type,
                    name: loggedUser.name, 
                    surname: loggedUser.surname,
                    email: loggedUser.email
                }}
                onSubmit={values => {
                    handleOnSubmit(values)
                }}
                onReset={() => {
                    setEditMode(false)
                }}
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
                })}
            >
            {({ handleSubmit, handleReset }) => (
                <S.StyledForm onSubmit={handleSubmit} onReset={handleReset}>
                    <S.StyledSpan>Id:</S.StyledSpan>
                    <Input
                        type="text"
                        name="id"
                        disabled
                    />
                    <S.StyledSpan>Type:</S.StyledSpan>
                    <Input
                        type="text"
                        name="type"
                        disabled
                    />
                    <S.StyledSpan>Name:</S.StyledSpan>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        disabled={!editMode}
                    />
                    <S.FormError name="name" component="span" />
                    <S.StyledSpan>Surname:</S.StyledSpan>
                    <Input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        disabled={!editMode}
                    />
                    <S.FormError name="surname" component="span" />
                    <S.StyledSpan>Email:</S.StyledSpan>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        disabled={!editMode}
                    />
                    <S.FormError name="email" component="span" />
                    <S.ButtonsWrapper>
                        {!editMode && 
                            <S.StyledButton 
                                type="button" 
                                background='#FA541C'
                                onClick={() => setEditMode(true)}
                            >
                                Edit
                            </S.StyledButton>
                        }
                        {editMode && 
                            <>
                                <S.StyledButton 
                                    type="reset" 
                                    background={theme.colors.red}
                                >
                                    Cancel changes
                                </S.StyledButton>
                                <S.StyledButton 
                                    type="submit" 
                                >
                                    {isLoading && <Spinner />}
                                    Save changes
                                </S.StyledButton>
                            </>
                        } 
                    </S.ButtonsWrapper>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default ProfileForm;
