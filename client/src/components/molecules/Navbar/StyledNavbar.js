import styled from 'styled-components';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/atoms/Header/Header';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';

export const Wrapper = styled.nav`
    width: 200px;
    min-height: 100vh;
    position: fixed;
    background-color: ${ ({theme}) => theme.background.white};
    border-right: ${ ({theme}) => `1px solid ${theme.background.border}`};

    display: flex;
    flex-direction: column;
`

// additional styles header
export const StyledHeader = styled(Header)`
    margin: 20px auto 30px auto;
`

export const LinksWrapper = styled.div`
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
` 

export const NavbarStyledLink = styled(NavLink)`
    height: 50px;
    margin-bottom: 10px;
    padding: 0 15px;
    color: ${({ theme }) => theme.background.grayDark};
    background-color: ${({theme}) => theme.background.white};
    text-decoration: none;
    transition: 0.3s;

    display: flex;
    align-items: center;

    :hover {
        transition: 0.3s;
        color: ${({ theme }) => theme.background.primary};
    }

    &.active {
        background-color: ${({theme}) => lighten('0.3', theme.background.primary)};
        color: ${({ theme }) => theme.background.primary};
    }
`

export const StyledButtonIcon = styled(ButtonIcon)`
    width: 20px;
    height: 20px;
`