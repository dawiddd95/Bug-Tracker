import styled from 'styled-components';

export const ButtonIcon = styled.img`
	background-image: url(${({ icon }) => icon});
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: 40%;
	border: none;
	height: 14px;
	margin: 0 10px 0 0;
	width: 14px;
`;
