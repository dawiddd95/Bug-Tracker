import React from 'react';
// import { routes } from 'routes/index';
import { Header } from 'components/atoms/Header/Header';
import GridTemplate from 'templates/GridTemplate';
// import * as S from './StyledDashboardPage';


const DashboardPage = () => {
    return (
        <GridTemplate>
            {/* <S.Wrapper>
                <S.InnerWrapper>
                    {children}
                </S.InnerWrapper>
            </S.Wrapper> */}


            {/* Lista komponentów z których składa się Grid */}
            <Header>
                Dashboard
            </Header>
        </GridTemplate>
    );
}

export default DashboardPage;