import styled from 'styled-components';

export const Input = styled.input`
	height: 40px;
	padding: 0 15px;
	outline: 0;
	border-radius: 5px;
	font-weight: 200;
	color: ${({ theme }) => theme.color.grayDark};
	transition: 0.3s;
	border: 1px solid #d9d9d9;

	::placeholder {
		letter-spacing: 1px;
		color: ${({ theme }) => theme.color.grayDark};
	}

	&:hover {
		transition: 0.3s;
		border: ${({ theme }) => `1px solid ${theme.background.primary}`};
	}

	&:focus {
		transition: 0.3s;
		border: ${({ theme }) => `1px solid ${theme.background.primary}`};
	}
`