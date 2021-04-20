import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { ThemeContext } from 'context';
import { commentsApi } from 'utils/api';
import actions from 'app/comments/actions';
import * as Yup from 'yup';
import Spinner from 'components/atoms/Spinner/Spinner';
import Alert from '../Alert/Alert';
import * as S from './StyledCommentForm';


const CommentForm = ({ticketId}) => {
    const dispatch = useDispatch()
    const {theme} = useContext(ThemeContext)
    const {loggedUser} = useSelector(state => state.users)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)

    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);
        
        const response = await axios.post(commentsApi, values);
        const {data} = response;

        if(data) {
            dispatch(actions.addComment(data.comment))
            setSuccess(true);
            setMessage('Comment addded!');
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
                    content: '',
                    ticketId,
                    authorId: loggedUser.id,
                }}
                onSubmit={values => {
                    console.log(values)
                    handleOnSubmit(values)
                }}
                validationSchema={Yup.object().shape({
                    content: Yup
                       .string()
                       .required('Content is required'),
                })}
            >
            {({ handleSubmit }) => (
                <S.StyledForm onSubmit={handleSubmit}>
                    <Field
                        as='textarea' 
                        type="text"
                        name="content"
                        placeholder="Write comment..."
                        style={{    
                            width: '100%',
                            minHeight: '100px',
                            margin: '0 0 20px 0',
                            padding: '10px 15px',
                            outline: '0',
                            borderRadius: '5px',
                            fontWeight: '200',
                            color: theme.colors.grayDark,
                            transition: '0.3s',
                            border: '1px solid #d9d9d9'
                        }}
                    />
                    <S.FormError name="content" component="span" />
                    <S.StyledButton 
                        type="submit" 
                        backround="white"
                    >
                        {isLoading && <Spinner />}
                        Comment
                    </S.StyledButton>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}

CommentForm.propTypes = {
    ticketId: PropTypes.number.isRequired
}
 
export default CommentForm;
