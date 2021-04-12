import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Formik } from 'formik';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes/index';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import * as Yup from 'yup';
import Alert from '../Alert/Alert';
import * as S from './StyledProjectForm';


const ProjectForm = ({loading, success, message, alert, edit, project, handleOnSubmit}) => {
    return (
        <>
            {alert && <Alert type="error" txt={message} />}
            {success && <Redirect to={routes.projects} />}
            <Formik
                enableReinitialize
                initialValues={{ 
                    id: edit ? project.id : '',
                    name: edit ? project.name : '',
                    desc: edit ? project.description : '',
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
                            disabled={loading} 
                        >
                            {loading && <Spinner />}
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

ProjectForm.propTypes = {
    loading: PropTypes.bool.isRequired, 
    success: PropTypes.bool.isRequired, 
    message: PropTypes.string.isRequired, 
    alert: PropTypes.bool.isRequired, 
    edit: PropTypes.bool,
    project: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string
    }),
    handleOnSubmit: PropTypes.func.isRequired
};
 
ProjectForm.defaultProps = {
    edit: false,
    project: {id: '', name: '', desc: ''}
};

export default ProjectForm;
