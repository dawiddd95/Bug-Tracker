import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Formik } from 'formik';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes/index';
import { projectsApi } from 'utils/api';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import actions from 'app/projects/actions';
import * as Yup from 'yup';
import Alert from '../Alert/Alert';
import * as S from './StyledNewProjectForm';


const NewProjectForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);

        try {
            const response = await axios.post(projectsApi, values);
            const {data} = response
            
            if(!data) setAlert(true)
            else {
                dispatch(actions.addProject(data.project))
                setSuccess(true)
            }
            
            setIsLoading(false);
            setSuccess(data.success);
            setMessage(data.msg);
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
            {isSuccess && <Redirect to={routes.projects} />}
            <Formik
                initialValues={{ 
                    name: '',
                    desc: ''
                }}
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={Yup.object().shape({
                    name: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Name is required'),
                    desc: Yup
                        .string()
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
                        name="desc"
                        placeholder="Description"
                    />
                    <S.ButtonsWrapper>
                        <S.StyledButton 
                            type="submit" 
                            backround="white"
                            disabled={isLoading} 
                        >
                            {isLoading && <Spinner />}
                            Save
                        </S.StyledButton>
                        <S.StyledButton 
                            type="reset" 
                            background={theme.background.white}
                            fancy
                        >
                            Reset
                        </S.StyledButton>
                    </S.ButtonsWrapper>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default NewProjectForm;