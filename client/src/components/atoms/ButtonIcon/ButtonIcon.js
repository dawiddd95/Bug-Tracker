import styled from 'styled-components';

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 10px 0 0;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
`;
