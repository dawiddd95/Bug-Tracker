import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from 'app/projects/operations';
import { routes } from 'routes/index';
import { theme } from 'theme/mainTheme';
import MainPageTemplate from 'templates/MainPageTemplate';
import newIcon from 'assets/icons/new.svg';
import binIcon from 'assets/icons/bin.svg';
import exportIcon from 'assets/icons/export.svg';
import SearchProjectForm from 'components/molecules/SearchProjectForm/SearchProjectForm';
import TableAntd from 'components/molecules/Table/Table';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import { Button } from 'components/atoms/Button/Button';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import * as S from './StyledProjectsPage';


/* eslint-disable */
const columns = [
    {
        title: 'Id', 
        dataIndex: 'id', 
        key: 'id'
    },
    {
        title: 'Name', 
        dataIndex: 'name', 
        key: 'name'
    },
    {
        title: 'Description', 
        dataIndex: 'description', 
        key: 'description',
    },
    { 
        title: 'Action', 
        key: 'action',
        render: ({id}) => 
        <>
            <S.Link color to={`/user/projects/${id}`}>View</S.Link>
            <S.Link color to={`/user/projects/${id}/edit`}>Edit</S.Link>
        </>
    },
];
/* eslint-enable */


const ProjectsPage = () => {
    const dispatch = useDispatch();
    const {projects, isFilter, filterProjects} = useSelector(state => state.projects)
    const [isLoading, setIsLoading] = useState(false);

    useEffect( async () => {
        setIsLoading(true);
        await dispatch(getAllProjects());
        setIsLoading(false);
    }, [])

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
                    <TableAntd 
                        data={isFilter ? filterProjects : projects} 
                        columns={columns}
                        isLoading={isLoading}    
                    />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default ProjectsPage;