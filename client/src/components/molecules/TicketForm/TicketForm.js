import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Formik } from 'formik';
import { theme } from 'theme/mainTheme';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import * as Yup from 'yup';
import * as S from './StyledTicketForm';


const TicketForm = ({loading, projectId, redirect, edit, ticket, handleOnSubmit}) => {
    return (
        <>
            {redirect && <Redirect to={`/user/projects/${parseInt(projectId, 10)}`} />}
            <Formik
                enableReinitialize
                initialValues={{ 
                    id: edit ? ticket.id : '',
                    title: edit ? ticket.title : '',
                    desc: edit ? ticket.description : '',
                    priority: edit ? ticket.priority : 'low',
                    projectId: parseInt(projectId, 10),
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
                            Reset {edit}
                        </S.StyledButton>
                    </S.ButtonsWrapper>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}

TicketForm.propTypes = {
    loading: PropTypes.bool.isRequired, 
    redirect: PropTypes.bool.isRequired,
    projectId: PropTypes.number.isRequired,
    edit: PropTypes.bool,
    ticket: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        priority: PropTypes.string
    }),
    handleOnSubmit: PropTypes.func.isRequired
};
 
TicketForm.defaultProps = {
    edit: false,
    ticket: {id: '', title: '', description: '', priority: 'low'}
};
 
export default TicketForm;
