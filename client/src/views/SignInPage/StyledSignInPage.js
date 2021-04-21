import styled from 'styled-components';
import backgroundImg from 'assets/img/auth-background.jpg';
import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';
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
    background-color: white;
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

export const InformationTextWrapper = styled.div`
    font-size: 14px;
    margin: 26px 0;
    text-align: center;

    span {
        margin: 0 5px;
    }
`

export const Divider = styled.div`
    background: transparent;
    display: table;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    
    &:before,
    &:after {
        border-top: 1px solid #e8e8e8;
        color: ${({ theme }) => theme.border};
        content: '';
        display: table-cell;
        position: relative;
        top: 50%;
        transform: translateY(50%);
        width: 50%;
    }
`

export const StyledSpan = styled(Span)`
    font-size: 16px;
    padding: 0 24px;
`

export const Link = styled(StyledLink)`
    display: flex;
    justify-content: center;
    margin: 40px auto 30px auto;
    width: 100%;
`

export const LanguageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Img = styled.img`
    height: 30px;
    margin: 0 10px;
    width: 30px;
`