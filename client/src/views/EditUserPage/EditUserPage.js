import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import ChangePasswordForm from 'components/molecules/ChangePasswordForm/ChangePasswordForm';
import * as S from './StyledEditUserPage';


const EditUserPage = ({match}) => {
    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.users}>Admin</StyledLink>
                    <S.StyledSpan>/ Change password</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        New Password
                    </Header>
                    <ChangePasswordForm id={parseInt(match.params.id,10)} />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

EditUserPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
  
export default EditUserPage;