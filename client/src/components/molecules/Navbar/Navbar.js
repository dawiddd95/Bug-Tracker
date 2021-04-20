import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { routes } from 'routes/index';
import dashboardIcon from 'assets/icons/dashboard.svg';
import projectIcon from 'assets/icons/project.svg';
import userIcon from 'assets/icons/user.svg';
import profileIcon from 'assets/icons/profile.svg';
import themeIcon from 'assets/icons/theme.svg';
import * as S from './StyledNavbar';


const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const {loggedUser} = useSelector(state => state.users)  

    useEffect(async () => {
        if(loggedUser.type === 'Admin') setIsAdmin(true);
    }, [])

    return (  
        <S.Wrapper>
            <S.StyledHeader>
                Bug Tracker
            </S.StyledHeader>
            <S.LinksWrapper>
            <S.NavbarStyledLink to={routes.dashboard}>
                    <S.StyledButtonIcon src={dashboardIcon} />
                    Dashboard
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to={routes.projects}>
                    <S.StyledButtonIcon src={projectIcon} />
                    Projects
                </S.NavbarStyledLink>
                {isAdmin && 
                    <S.NavbarStyledLink to={routes.users}>
                        <S.StyledButtonIcon src={userIcon} />
                        Users
                    </S.NavbarStyledLink>
                }
                <S.NavbarStyledLink to={routes.profile}>
                    <S.StyledButtonIcon src={profileIcon} />
                    Profile
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to={routes.themes}>
                    <S.StyledButtonIcon src={themeIcon} />
                    Themes
                </S.NavbarStyledLink>
            </S.LinksWrapper>
        </S.Wrapper>
    );
}
 
export default Navbar;
