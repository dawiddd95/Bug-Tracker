import React from 'react';
import { routes } from 'routes/index';
import dashboardIcon from 'assets/icons/dashboard.svg';
import bugIcon from 'assets/icons/bug.svg';
import projectIcon from 'assets/icons/project.svg';
import userIcon from 'assets/icons/user.svg';
import profileIcon from 'assets/icons/profile.svg';
import * as S from './StyledNavbar';


const Navbar = () => {
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
                <S.NavbarStyledLink to={routes.tickets}>
                    <S.StyledButtonIcon src={bugIcon} />
                    Tickets
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to={routes.users}>
                    <S.StyledButtonIcon src={userIcon} />
                    Users
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to={routes.profile}>
                    <S.StyledButtonIcon src={profileIcon} />
                    Profile
                </S.NavbarStyledLink>
            </S.LinksWrapper>
        </S.Wrapper>
    );
}
 
export default Navbar;
