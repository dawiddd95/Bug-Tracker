import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
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
import * as S from './StyledEditProjectForm';


const EditProjectForm = ({project}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);

        const response = await axios.patch(`${projectsApi}/${project.id}/edit`, values);
        const {data} = response
        
        if(!data) {
            setAlert(true)
        }
        else {
            dispatch(actions.editProject(data.project))
            setSuccess(true)
        }

        setIsLoading(false);
        setMessage(data.msg);    
    }

    return (
        <>
            {alert && <Alert type="error" txt={message} />}
            {isSuccess && <Redirect to={routes.projects} />}
            <Formik
                enableReinitialize
                initialValues={{ 
                    id: project.id,
                    name: project.name,
                    desc: project.description
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

EditProjectForm.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string
    }),
};

EditProjectForm.defaultProps = {
    project: {id: '', name: '', desc: ''}
};
 
export default EditProjectForm;
