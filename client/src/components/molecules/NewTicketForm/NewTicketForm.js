import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Formik } from 'formik';
import { theme } from 'theme/mainTheme';
import { ticketsApi } from 'utils/api';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import actions from 'app/projects/actions';
import * as Yup from 'yup';
import Alert from '../Alert/Alert';
import * as S from './StyledNewTicketForm';

/* eslint-disable */
const NewTicketForm = ({project}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);


    const handleOnSubmit = async values => {

        console.log(project)

        console.log(values)

        setAlert(false);
        setIsLoading(true);

        try {
            const response = await axios.post(ticketsApi, values);
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

            // if(error.response.status === 400) setMessage('400 (Invalid Token)')
            if(error.response.status === 401) setMessage('401 (Unauthorized)')
            if(error.response.status === 403) setMessage('403 (Forbidden) Not allowed to continue this operation')
            if(error.response.status === 500) setMessage(`500 (Internal Server Error) ${error.response.data }`)
        }
    }

    return (
        <>
            {alert && <Alert type="error" txt={message} />}
            {isSuccess && <Redirect to={`/user/projects/${parseInt(project, 10)}`} />}
            <Formik
                initialValues={{ 
                    title: '',
                    desc: '',
                    priority: 'low',
                    projectId: parseInt(project, 10),
                }}
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={Yup.object().shape({
                    title: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Name is required'),
                    desc: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Description is required'),
                })}
            >
            {({ handleSubmit, handleChange }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                    <S.FormError name="title" component="span" />
                    <Input
                        type="text"
                        name="desc"
                        placeholder="Description"
                    />
                    <S.FormError name="desc" component="span" />
                    <Input name="priority" as="select" onChange={handleChange}>
                        <option value="low">Low</option> 
                        <option value="normal">Normal</option> 
                        <option value="high">High</option> 
                    </Input>
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

NewTicketForm.propTypes = {
	userData: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        surname: PropTypes.string
    }).isRequired,
};
 
export default NewTicketForm;
