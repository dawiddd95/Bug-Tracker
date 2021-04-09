import React from 'react';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import NewProjectForm from 'components/molecules/NewProjectForm/NewProjectForm';
import * as S from './StyledNewProjectPage';

const NewProjectPage = () => {
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
                       <NewProjectForm />
                    </S.FormWrapper>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default NewProjectPage;