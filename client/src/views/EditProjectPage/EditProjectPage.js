import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import { projectsApi } from 'utils/api';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import EditProjectForm from 'components/molecules/EditProjectForm/EditProjectForm';
import * as S from './StyledEditProjectPage';

const EditProjectPage = ({match}) => {
    const [data, setData] = useState({id: '', name: '', desc: ''});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${projectsApi}/${parseInt(match.params.id,10)}`, {withCredentials: true})
            const { project } = response.data;

            setData(project);
        }
        fetchData()
     }, [])

    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.projects}>Projects</StyledLink>
                    <S.StyledSpan>/ </S.StyledSpan>
                    <StyledLink to={routes.projects}>project {parseInt(match.params.id,10)}</StyledLink>
                    <S.StyledSpan>/ Edit </S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Edit Project
                    </Header>
                    <S.FormWrapper>
                       <EditProjectForm edit project={data} />
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