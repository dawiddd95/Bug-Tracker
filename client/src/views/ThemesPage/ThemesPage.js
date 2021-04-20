import React, { useContext } from 'react';
import { routes } from 'routes/index';
import { ThemeContext } from 'context';
import MainPageTemplate from 'templates/MainPageTemplate';
import { defaultTheme, cyanTheme, geekBlueTheme, goldTheme, limeTheme, redTheme, volcanoTheme, magentaTheme } from 'theme/mainTheme';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import { Span } from 'components/atoms/Span/Span';
import * as S from './StyledThemesPage';



const ThemesPage = () => {
    const { theme, changeTheme } = useContext(ThemeContext)

    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/ Themes</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Themes
                    </Header>
                    <Span style={{color: theme.primary}}>Click through the application to experience the new theme</Span>
                    <S.ButtonsWrapper>
                        <S.StyledButton background='#3399FE' onClick={() => changeTheme(defaultTheme)}>Default</S.StyledButton>
                        <S.StyledButton background='#13C2C2' onClick={() => changeTheme(cyanTheme)}>Cyan</S.StyledButton>
                        <S.StyledButton background='#2F54EB' onClick={() => changeTheme(geekBlueTheme)}>Geek blue</S.StyledButton>
                        <S.StyledButton background='#FAAD14' onClick={() => changeTheme(goldTheme)}>Gold</S.StyledButton>
                        <S.StyledButton background='#A0D911' onClick={() => changeTheme(limeTheme)}>Lime</S.StyledButton>
                        <S.StyledButton background='#F5222D' onClick={() => changeTheme(redTheme)}>Red</S.StyledButton>
                        <S.StyledButton background='#FA541C' onClick={() => changeTheme(volcanoTheme)}>Volcano</S.StyledButton>
                        <S.StyledButton background='#EB2F96' onClick={() => changeTheme(magentaTheme)}>Magenta</S.StyledButton>
                    </S.ButtonsWrapper>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

export default ThemesPage;