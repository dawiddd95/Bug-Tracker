import styled from 'styled-components';
import backgroundImg from 'assets/img/auth-background.jpg';
import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
`

export const InnerWrapper = styled.div`
    width: 500px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background.white};
    transform: scaleX(-1);
`

export const AuthContentWrapper = styled.div`
    margin: 0 50px;
    padding-top: 70px;
`

export const StyledHeader = styled(Header)`
    text-align: center;
    margin-bottom: 70px;
`

export const InformationTextWrapper = styled.div`
    margin: 26px 0;
    font-size: 14px;
    text-align: center;

    span {
        margin: 0 5px;
    }
`

export const Divider = styled.div`
    display: table;
    white-space: nowrap;
    text-align: center;
    background: transparent;
    font-weight: 500;
    
    font-size: 16px;

    &:before,
    &:after {
        content: '';
        color: ${({ theme }) => theme.background.border};
        display: table-cell;
        position: relative;
        top: 50%;
        width: 50%;
        border-top: 1px solid #e8e8e8;
        transform: translateY(50%);
    }
`

export const StyledSpan = styled(Span)`
    padding: 0 24px;
    font-size: 16px;
`

export const Link = styled(StyledLink)`
    width: 100%;
    margin: 40px auto 30px auto;
    display: flex;
    justify-content: center;
`

export const LanguageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Img = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 10px;
`