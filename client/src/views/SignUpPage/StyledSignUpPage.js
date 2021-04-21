import styled from 'styled-components';
import backgroundImg from 'assets/img/auth-signup.jpg';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.div`
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    overflow: hidden;
    transform: scaleX(-1);
    width: 100%;
`

export const InnerWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
    transform: scaleX(-1);
    width: 500px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const AuthContentWrapper = styled.div`
    margin: 0 50px;
    padding: 70px 0;

    @media (max-width: 768px) {
        margin: 0 20px;
    }
`

export const StyledHeader = styled(Header)`
    margin-bottom: 70px;
    text-align: center;
`

export const Link = styled(StyledLink)`
    display: flex;
    justify-content: center;
    margin: 40px auto 30px auto;
    width: 100%;
`