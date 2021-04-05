import React from 'react';
// import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import * as S from './StyledDashboardPage';


const DashboardPage = () => {
    return (
        <MainPageTemplate>
            <S.Wrapper>
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