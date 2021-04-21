import styled from 'styled-components';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/atoms/Header/Header';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';

export const Wrapper = styled.nav`
    background-color: ${ ({theme}) => theme.colors.white};
    border-right: ${ ({theme}) => `1px solid ${theme.border}`};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: fixed;
    width: 200px;

    @media (max-width: 1022px) {
        min-height: 100px;
        position: static;
        width: 100%;
    }
`

export const StyledHeader = styled(Header)`
    margin: 20px auto 30px auto;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%; 
` 

export const NavbarStyledLink = styled(NavLink)`
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grayDark};
    display: flex;
    height: 50px;
    margin-bottom: 10px;
    padding: 0 15px;
    text-decoration: none;
    transition: 0.3s;

    :hover {
        color: ${({ theme }) => theme.primary};
        transition: 0.3s;
    }

    &.active {
        background-color: ${({theme}) => lighten('0.3', theme.primary)};
        color: ${({ theme }) => theme.primary};
    }
`

export const StyledButtonIcon = styled(ButtonIcon)`
    height: 20px;
    width: 20px;
`