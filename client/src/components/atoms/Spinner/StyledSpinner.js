import styled, {keyframes} from 'styled-components';

export const spinnerLoader = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
    animation: ${spinnerLoader} .5s infinite linear;
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    border-radius: 50%;
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    font-size: 2px;
    height: 20px;
    margin: 2px 20px 0 10px;
    transform: translateZ(0);
    width: 20px;
`