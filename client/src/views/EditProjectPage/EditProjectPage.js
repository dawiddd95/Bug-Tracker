import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import { projectsApi } from 'utils/api';
import actions from 'app/projects/actions';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import ProjectForm from 'components/molecules/ProjectForm/ProjectForm';
import * as S from './StyledEditProjectPage';

const EditProjectPage = ({match}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);
    const [data, setData] = useState({id: '', name: '', desc: ''});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${projectsApi}/${parseInt(match.params.id,10)}`, {withCredentials: true})
            const { project } = response.data;

            setData(project);
        }
        fetchData()
     }, [])


    const handleOnSubmit = async values => {
        setAlert(false);
        setIsLoading(true);

        try {
            const response = await axios.patch(`${projectsApi}/${data.id}/edit`, values)
            const {project, success, msg} = response.data
            
            dispatch(actions.editProject(project))
            setSuccess(true)
            
            
            setIsLoading(false);
            setSuccess(success);
            setMessage(msg);
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
                    <S.StyledSpan>/ </S.StyledSpan>
                    <StyledLink to={`/user/projects/${parseInt(match.params.id,10)}`}>project {parseInt(match.params.id,10)}</StyledLink>
                    <S.StyledSpan>/ Edit </S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Edit Project
                    </Header>
                    <S.FormWrapper>
                       <ProjectForm 
                            loading={isLoading}
                            success={isSuccess}
                            message={message}
                            alert={alert}
                            edit
                            project={data}
                            handleOnSubmit={handleOnSubmit}
                        />
                    </S.FormWrapper>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

EditProjectPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
  
export default EditProjectPage;