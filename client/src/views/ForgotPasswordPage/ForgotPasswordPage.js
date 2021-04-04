import ForgotPasswordForm from 'components/molecules/ForgotPasswordForm/ForgotPasswordForm';
import React from 'react';
import AuthPageTemplate from 'templates/AuthPageTemplate';
import { routes } from 'routes/index';
import * as S from './StyledForgotPasswordPage';

const ForgotPasswordPage = () => {
    return (
        <S.Wrapper>
            <AuthPageTemplate>
                <S.InnerWrapper>
                    <S.AuthContentWrapper>
                        <S.StyledHeader big>
                            Bug Tracker
                        </S.StyledHeader>
                        <ForgotPasswordForm />
                        <S.Link to={routes.home} color>Cancel</S.Link>
                    </S.AuthContentWrapper>
                </S.InnerWrapper>
            </AuthPageTemplate>
        </S.Wrapper>
    );
};

export default ForgotPasswordPage;
