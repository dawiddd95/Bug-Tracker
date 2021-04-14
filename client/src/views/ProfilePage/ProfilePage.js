import React from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { routes } from 'routes/index';
// import actions from 'app/projects/actions';
// import { projectsApi } from 'utils/api';
// import binIcon from 'assets/icons/bin.svg';
// import newIcon from 'assets/icons/new.svg';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
// import Alert from 'components/molecules/Alert/Alert';
import ProfileForm from 'components/molecules/ProfileForm/ProfileForm';
import * as S from './StyledProfilePage';


// Jak klikniemy edit to ma się pokazać button save oraz cancel, albo poprostu form, ale dopiero jak damy save to zapisze
const ProfilePage = () => {
    return (
        <MainPageTemplate>
            {/* {isSuccess && <Redirect to={routes.projects}/> } */}
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/ Profile</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Profile
                    </Header>
                    {/* {message && <Alert type="error" txt={message} />} */}
                    {/* tutaj form z przekazanym user={loggedUser} */}
                    <ProfileForm user={{}} />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}
  
export default ProfilePage;