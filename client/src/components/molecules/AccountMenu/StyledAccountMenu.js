import styled from 'styled-components';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InnerWrapper = styled.div`
    width: 100px;
    height: 65px;
    margin: 0 140px 0 0;
    border-left: ${ ({theme}) => `1px dotted ${theme.background.border}`};
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DropdownWrapper = styled.div`
    width: 150px;
    height: auto;
    margin: 55px 70px 0 0;
    position: absolute;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.2);
    background-color: white;

    display: flex;
    flex-direction: column;
`

export const DropdownStyledLink = styled(StyledLink)`
    padding: 16px 12px;
    border-bottom: ${ ({theme}) => `0.5px dotted ${theme.background.border}`};;
`
