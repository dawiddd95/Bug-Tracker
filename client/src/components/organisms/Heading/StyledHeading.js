import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: ${({ theme }) => `1px solid ${theme.border}`};
    display: flex;
    justify-content: flex-end;
    position: fixed;
    width: 100%;

    @media (max-width: 1022px) {
        position: static;
    }
`;

export const InnerWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-end;
	width: 100%;

    @media (max-width: 1022px) {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }
`;

export const LanguageSelectWrapper = styled.div`
  	margin: 0 100px 0 0;
`;
