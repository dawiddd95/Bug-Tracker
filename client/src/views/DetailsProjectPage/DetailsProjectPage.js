import React from 'react'
// { useState, useEffect } 
// import axios from 'axios';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
// import { projectsApi } from 'utils/api';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import * as S from './StyledDetailsProjectPage';

const DetailsProjectPage = ({match}) => {
    // const [data, setData] = useState({id: '', name: '', desc: ''});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get(`${projectsApi}/${parseInt(match.params.id,10)}`, {withCredentials: true})
    //         const { project } = response.data;

    //         setData(project);
    //     }
    //     fetchData()
    //  }, [])

    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.projects}>Projects</StyledLink>
                    <S.StyledSpan>/ project {parseInt(match.params.id,10)}</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Details: Project {match.params.id}
                    </Header>
                   
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

DetailsProjectPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
  
export default DetailsProjectPage;