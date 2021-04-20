import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import { theme } from 'theme/mainTheme';
import { Input } from 'components/atoms/Input/Input';
import { Spinner } from 'components/atoms/Spinner/StyledSpinner';
import * as Yup from 'yup';
import Alert from 'components/molecules/Alert/Alert';
import { ticketsSearchApi } from 'utils/api';
import actions from 'app/projects/actions';
import * as S from './StyledSearchTicketForm';


const SearchTicketForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const handleOnReset = () => {
        dispatch(actions.isFilterTicket(false))
        setAlert(false)
    }

    const handleOnSubmit = async values => {
        console.log(values)

        setAlert(false);
        setIsLoading(true);

        try {
            const response = await axios.post(ticketsSearchApi, values)
            const {data} = response.data

            dispatch(actions.isFilterTicket(true))
            dispatch(actions.filterTickets(data))

            setSuccess(true);
            setIsLoading(false);
            setMessage('Filter success! To show all tickets again click reset button in search form.');
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
                    title: '',
                    desc: '',
                    priority: '',
                    status: 'new'
                }}
                onSubmit={values => {
                    handleOnSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    id: Yup
                        .number(),
                    title: Yup
                        .string(),
                    desc: Yup
                        .string(),
                })}
            >
            {({ handleSubmit, handleChange }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="id"
                        placeholder="Id"
                    />
                    <S.FormError name="id" component="span" />
                    <Input
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                    <Input
                        type="text"
                        name="desc"
                        placeholder="Description"
                    />
                    <Input name="priority" as="select" placeholder="Priority" onChange={handleChange}>
                        <option value="">Select priority</option> 
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
                            Search
                        </S.StyledButton>
                        <S.StyledButton 
                            type="reset" 
                            // background={theme.background.white}
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
 
export default SearchTicketForm;
