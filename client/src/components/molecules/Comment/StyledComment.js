import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 50%;
    margin-bottom: 20px;
    border-radius: .375em;
    border: ${({ theme }) => `1px solid ${theme.primary}`};
    border-left: ${({ theme }) => `8px solid ${theme.primary}`};
`;

export const HeaderWrapper = styled.div`
    margin: 0 60px 0 20px;
    padding: 20px;
    border-bottom: ${({ theme }) => `1px dotted ${theme.primary}`};
`

export const BodyWrapper = styled.div`
    padding: 20px 20px 40px 40px;
`
