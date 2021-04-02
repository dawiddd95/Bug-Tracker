import styled from 'styled-components';
import backgroundImg from 'assets/img/auth-background.jpg';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
`

export const AuthContentWrapper = styled.div`
    width: 420px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background.white};
    transform: scaleX(-1);
`