import styled from 'styled-components';
import Select from 'react-select';

export const ReactSelect = styled(Select)`
	border-color: #d9d9d9;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.grayDark};
	font-weight: 200;
	height: 40px;
	outline: 0;
	transition: 0.3s;
	width: 200px;

  	&:hover {
		border-color: ${({ theme }) => theme.primary};
		transition: 0.3s;
  	}

	&:focus {
		border-color: ${({ theme }) => theme.primary};
		transition: 0.3s;
	}
`;
