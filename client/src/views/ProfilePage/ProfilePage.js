import React from 'react';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import ProfileForm from 'components/molecules/ProfileForm/ProfileForm';
import * as S from './StyledProfilePage';

const ProfilePage = () => {
    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/ Profile</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Profile
                    </Header>
                    <ProfileForm />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}
  
export default ProfilePage;