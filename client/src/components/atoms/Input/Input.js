import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
	border: 1px solid #d9d9d9;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.grayDark};
	font-weight: 200;
	height: 40px;
	margin: 0 0 20px 0;
	outline: 0;
	padding: 0 15px;
	transition: 0.3s;
	width: 100%;
	
	::placeholder {
		color: ${({ theme }) => theme.border};
		letter-spacing: 1px;
	}

	&:hover {
		border: ${({ theme }) => `1px solid ${theme.primary}`};
		transition: 0.3s;
	}

	&:focus {
		border: ${({ theme }) => `1px solid ${theme.primary}`};
		transition: 0.3s;
	}
`