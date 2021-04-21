import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100px;
`

export const InnerWrapper = styled.div`
    align-items: center;
    border-left: ${ ({theme}) => `1px dotted ${theme.border}`};
    display: flex;
    height: 65px;
    justify-content: center;
    margin: 0 140px 0 0;
    width: 100px;
`

export const DropdownWrapper = styled.div`
    background-color: white;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 55px 70px 0 0;
    position: absolute;
    width: 150px;
`

export const DropdownStyledLink = styled(StyledLink)`
    border-bottom: ${ ({theme}) => `0.5px dotted ${theme.border}`};;
    padding: 16px 12px;
`

export const StyledButton = styled(Button)`
    display: flex;
    height: 50px;
    justify-content: flex-start;
    margin-right: auto;
    padding: 0 12px;
    width: 100%;
`
