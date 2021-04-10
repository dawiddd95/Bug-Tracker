import React from 'react';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import * as S from './StyledDashboardPage';


const DashboardPage = () => {
    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Dashboard
                    </Header>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default DashboardPage;