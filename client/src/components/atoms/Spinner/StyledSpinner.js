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
    width: 20px;
    height: 20px;
    margin: 2px 20px 0 10px;
    font-size: 2px;
    border-radius: 50%;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: ${spinnerLoader} .5s infinite linear;
`