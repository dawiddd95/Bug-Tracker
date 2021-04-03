import SignInForm from 'components/molecules/SignInForm/SignInForm';
import React from 'react';
import AuthPageTemplate from 'templates/AuthPageTemplate';
import plIcon from 'assets/icons/pl.svg';
import engIcon from 'assets/icons/eng.svg';
import { routes } from 'routes/index';
import { Span } from 'components/atoms/Span/Span';
import { Strong } from 'components/atoms/Strong/Strong';
import * as S from './StyledHomePage';

const HomePage = () => {
    return (
        <S.Wrapper>
            <AuthPageTemplate>
                <S.InnerWrapper>
                    <S.AuthContentWrapper>
                        <S.StyledHeader big>
                            Bug Tracker
                        </S.StyledHeader>
                        <SignInForm />
                        <S.InformationTextWrapper>
                            <Strong>This is a demo application. Do not send/upload sensitive information!</Strong>
                            <Span>All information submitted is</Span>
                            <Strong>public!</Strong>
                            <Span>The database is not cleaned daily.</Span>
                        </S.InformationTextWrapper>
                        <S.Divider>
                            <S.StyledSpan>
                                or
                            </S.StyledSpan>
                        </S.Divider>
                        <S.Link to={routes.signUp} color>Create an account</S.Link>
                        <S.LanguageWrapper>
                            <S.Img src={plIcon} />
                            <S.Img src={engIcon} />
                        </S.LanguageWrapper>
                    </S.AuthContentWrapper>
                </S.InnerWrapper>
            </AuthPageTemplate>
        </S.Wrapper>
    );
};

export default HomePage;
