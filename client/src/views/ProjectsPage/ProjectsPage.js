import React from 'react';
import { routes } from 'routes/index';
import { theme } from 'theme/mainTheme';
import MainPageTemplate from 'templates/MainPageTemplate';
import newIcon from 'assets/icons/new.svg';
import binIcon from 'assets/icons/bin.svg';
import exportIcon from 'assets/icons/export.svg';
import SearchProjectForm from 'components/molecules/SearchProjectForm/SearchProjectForm';
import ProjectsTable from 'components/molecules/ProjectsTable/ProjectsTable';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import * as S from './StyledProjectsPage';


const ProjectsPage = () => {
    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/ Projects</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Projects
                    </Header>
                    <S.ButtonsWrapper>
                        <StyledLink 
                            to={routes.newProject} 
                            button 
                            background={theme.background.primary}
                        >
                            <ButtonIcon src={newIcon} />
                            New
                        </StyledLink>
                        <Button fancy background={theme.background.white}>
                            <ButtonIcon src={binIcon} />
                            Delete
                        </Button>
                        <Button disabled>
                            <ButtonIcon src={exportIcon} />
                            Export to Excel
                        </Button>
                        <Button fancy background={theme.background.white}>
                            Audit
                        </Button>
                    </S.ButtonsWrapper>
                    <S.SearchWrapper>
                        <S.StyledHeader>
                            Search project
                        </S.StyledHeader>
                        <SearchProjectForm />
                    </S.SearchWrapper>
                    <ProjectsTable />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default ProjectsPage;