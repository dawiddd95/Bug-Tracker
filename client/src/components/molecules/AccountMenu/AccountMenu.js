import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { routes } from 'routes/index';
import { defaultTheme } from 'theme/mainTheme';
import { Span } from 'components/atoms/Span/Span';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import profileIcon from 'assets/icons/profile.svg';
import themeIcon from 'assets/icons/theme.svg';
import logoutIcon from 'assets/icons/logout.svg';
import * as S from './StyledAccountMenu';


const AccountMenu = () => {
    const [isVisible, setVisibility] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const onMouseOver = () => {
        setVisibility(true);
    }

    const onMouseLeave = () => {
        setVisibility(false);
    }

    const logout = () => {
        // dispatch({type: 'RESET_STORE'})
        sessionStorage.removeItem('session')
        setRedirect(true)
     }

    return (
        <>
            {redirect && <Redirect to={routes.home} />}
            <S.Wrapper onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                <S.InnerWrapper>
                    <Span>
                        Menu
                    </Span>
                </S.InnerWrapper>
                {
                    isVisible && (
                        <S.DropdownWrapper onMouseOver={onMouseOver}>
                            <S.DropdownStyledLink to={routes.themes}>
                                <ButtonIcon src={themeIcon} />
                                Themes
                            </S.DropdownStyledLink>
                            <S.DropdownStyledLink to={routes.profile}>
                                <ButtonIcon src={profileIcon} />
                                Profile
                            </S.DropdownStyledLink>
                            <S.StyledButton 
                                color={defaultTheme.colors.white}
                                onClick={logout}
                            >
                                <ButtonIcon src={logoutIcon} />
                                Logout
                            </S.StyledButton>
                        </S.DropdownWrapper>
                    )
                }
            </S.Wrapper>
        </>
    );
}
 
export default AccountMenu;
