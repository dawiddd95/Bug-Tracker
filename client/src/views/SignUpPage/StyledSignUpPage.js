import styled from 'styled-components';
import backgroundImg from 'assets/img/auth-signup.jpg';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
    overflow: hidden;
`

export const InnerWrapper = styled.div`
    width: 500px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    transform: scaleX(-1);

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
    text-align: center;
    margin-bottom: 70px;
`

export const Link = styled(StyledLink)`
    width: 100%;
    margin: 40px auto 30px auto;
    display: flex;
    justify-content: center;
`