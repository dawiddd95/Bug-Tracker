import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Span } from 'components/atoms/Span/Span';
import { StyledLink } from 'components/atoms/Link/Link';
import { lighten } from 'polished';


export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: white;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Img = styled.img`
    width: 478px;
    height: 406px;

    @media (max-width: 500px) {
        width: 239px;
        height: 203px;
    }
`

export const TextWrapper = styled.div`
    height: 300px;
    margin-left: 72px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`

export const StyledHeader = styled(Header)`
    margin-bottom: 24px;
    font-size: 72px;

    @media (max-width: 500px) {
        font-size: 50px;
    }
`

export const StyledSpan = styled(Span)`
    margin-bottom: 16px;
    font-size: 20px;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

export const Link = styled(StyledLink)`
    width: 120px;
    padding: 8px 0;
    border: 1px solid;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.primary};
    border-radius: 4px;

    display: flex;
    justify-content: center;

    :hover {
		background-color: ${({ theme }) => lighten('0.1', theme.primary)};
        color: ${({ theme }) => theme.colors.white};
		transition: 0.3s;
	}
`