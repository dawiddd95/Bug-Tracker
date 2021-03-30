import React from 'react';
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
                <S.NavbarStyledLink to='/projects'>
                    <S.StyledButtonIcon src={projectIcon} />
                    Projects
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to='/tickets'>
                    <S.StyledButtonIcon src={bugIcon} />
                    Tickets
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to='/users'>
                    <S.StyledButtonIcon src={userIcon} />
                    Users
                </S.NavbarStyledLink>
                <S.NavbarStyledLink to='/profile'>
                    <S.StyledButtonIcon src={profileIcon} />
                    Profile
                </S.NavbarStyledLink>
            </S.LinksWrapper>
        </S.Wrapper>
    );
}
 
export default Navbar;
