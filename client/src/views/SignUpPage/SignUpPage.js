import SignUpForm from 'components/molecules/SignUpForm/SignUpForm';
import React from 'react';
import AuthPageTemplate from 'templates/AuthPageTemplate';
import { routes } from 'routes/index';
import * as S from './StyledSignUpPage';

const SignUpPage = () => {
    return (
        <S.Wrapper>
            <AuthPageTemplate>
                <S.InnerWrapper>
                    <S.AuthContentWrapper>
                        {/* if context Alert tutaj dać context */}
                        <S.StyledHeader big>
                            Bug Tracker
                        </S.StyledHeader>
                        <SignUpForm />
                        <S.Link to={routes.home} color>Already have an account? Sign in.</S.Link>
                    </S.AuthContentWrapper>
                </S.InnerWrapper>
            </AuthPageTemplate>
        </S.Wrapper>
    );
};

export default SignUpPage;
