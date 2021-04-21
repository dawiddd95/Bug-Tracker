import styled from 'styled-components';


export const Wrapper = styled.div`
    border: ${({ theme }) => `1px solid ${theme.primary}`};
    border-left: ${({ theme }) => `8px solid ${theme.primary}`};
    border-radius: .375em;
    margin-bottom: 20px;
    width: 50%;

    @media (max-width: 1022px) {
		width: 90%;
    }
`;

export const HeaderWrapper = styled.div`
    border-bottom: ${({ theme }) => `1px dotted ${theme.primary}`};
    margin: 0 60px 0 20px;
    padding: 20px;

    @media (max-width: 1022px) {
		padding: 20px 0;
    }
`

export const BodyWrapper = styled.div`
    padding: 20px 20px 40px 40px;

    @media (max-width: 1022px) {
		padding: 20px 20px 40px 20px;
    }
`
