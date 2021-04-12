import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import actions from 'app/projects/actions';
import { projectsApi } from 'utils/api';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import ProjectForm from 'components/molecules/ProjectForm/ProjectForm';
import * as S from './StyledNewProjectPage';

const NewProjectPage = () => {
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
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.projects}>Projects</StyledLink>
                    <S.StyledSpan>/ New</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        New Project
                    </Header>
                    <S.FormWrapper>
                       <ProjectForm 
                            loading={isLoading}
                            success={isSuccess}
                            message={message}
                            alert={alert}
                            handleOnSubmit={handleOnSubmit}
                       />
                    </S.FormWrapper>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default NewProjectPage;