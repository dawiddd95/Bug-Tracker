import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { lighten } from 'polished';


export const Wrapper = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Img = styled.img`
    height: 406px;
    width: 478px;

    @media (max-width: 500px) {
        height: 203px;
        width: 239px;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    margin-left: 72px;
    
    @media (max-width: 768px) {
        margin-left: 0;
    }
`

export const StyledHeader = styled(Header)`
    font-size: 72px;
    margin-bottom: 24px;

    @media (max-width: 500px) {
        font-size: 50px;
    }
`

export const StyledSpan = styled(Span)`
    font-size: 20px;
    margin-bottom: 16px;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

export const Link = styled(StyledLink)`
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    padding: 8px 0;
    width: 120px;

    :hover {
		background-color: ${({ theme }) => lighten('0.1', theme.primary)};
        color: ${({ theme }) => theme.colors.white};
		transition: 0.3s;
	}
`