import React, { useState } from 'react';
import { Formik } from 'formik';
import { theme } from 'theme/mainTheme';
import { Input } from 'components/atoms/Input/Input';
import * as Yup from 'yup';
import Alert from 'components/molecules/Alert/Alert';
import * as S from './StyledSearchProjectForm';


const SearchProjectForm = () => {
    const [alert, setAlert] = useState(false);

    return (
        <>
            {alert && <Alert type="error" txt="We are temporarily unable to perform this operation" />}
            <Formik
                initialValues={{ 
                    id: '',
                    name: '',
                    desc: ''
                }}
                onSubmit={() => {
                    setAlert(true);
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
                        >
                            Search
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
 
export default SearchProjectForm;
