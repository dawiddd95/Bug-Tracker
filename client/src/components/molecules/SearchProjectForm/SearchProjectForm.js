import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { theme } from 'theme/mainTheme';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import * as Yup from 'yup';
import Alert from 'components/molecules/Alert/Alert';
import { projectsSearchApi } from 'utils/api';
import actions from 'app/projects/actions';
import * as S from './StyledSearchProjectForm';


const SearchProjectForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const handleOnReset = () => {
        dispatch(actions.isFilterProject(false))
        setAlert(false)
    }

    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);

        try {
            const response = await axios.post(projectsSearchApi, values)
            const {data} = response.data

            dispatch(actions.isFilterProject(true))
            dispatch(actions.filterProjects(data))

            setSuccess(true);
            setIsLoading(false);
            setMessage('Filter success! To show all projects again click reset button in search form.');
            setAlert(true);
        } catch (error) {
            setAlert(true);
            setIsLoading(false);
            setSuccess(false);

            if(error.response.status === 400) setMessage('400 (Invalid Token)')
            if(error.response.status === 401) setMessage('401 (Unauthorized)')
            if(error.response.status === 403) setMessage('403 (Forbidden) Not allowed to continue this operation')
            if(error.response.status === 500) setMessage(`500 (Internal Server Error) ${error.response.data }`)
        }
    }


    return (
        <>
            {alert && <Alert type={isSuccess ? 'success' : 'error'} txt={message} />}
            <Formik
                initialValues={{ 
                    id: '',
                    name: '',
                    desc: ''
                }}
                onSubmit={values => {
                    handleOnSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    id: Yup
                        .number(),
                    name: Yup
                        .string(),
                    desc: Yup
                        .string()
                })}
            >
            {({ handleSubmit }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="id"
                        placeholder="Id"
                    />
                    <S.FormError name="id" component="span" />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Project name"
                    />
                    <S.FormError name="name" component="span" />
                    <Input
                        type="text"
                        name="desc"
                        placeholder="Project description"
                    />
                    <S.FormError name="desc" component="span" />
                    <S.ButtonsWrapper>
                        <S.StyledButton 
                            type="submit" 
                            backround="white"
                            disabled={isLoading} 
                        >
                            {isLoading && <Spinner />}
                            Search
                        </S.StyledButton>
                        <S.StyledButton 
                            type="reset" 
                            background={theme.background.white}
                            fancy
                            onClick={() => handleOnReset()}
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
 
export default SearchProjectForm;
