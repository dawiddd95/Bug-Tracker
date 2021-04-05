import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
	width: 100%;
	height: 40px;
	margin: 0 0 20px 0;
	padding: 0 15px;
	outline: 0;
	border-radius: 5px;
	font-weight: 200;
	color: ${({ theme }) => theme.background.grayDark};
	transition: 0.3s;
	border: 1px solid #d9d9d9;

	::placeholder {
		letter-spacing: 1px;
		color: ${({ theme }) => theme.background.border};
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