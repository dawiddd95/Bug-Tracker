import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    border-bottom: ${({ theme }) => `1px solid ${theme.border}`};
    background-color: ${({ theme }) => theme.colors.white};
`;

export const InnerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const LanguageSelectWrapper = styled.div`
  	margin: 0 100px 0 0;
`;
