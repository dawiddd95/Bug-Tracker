import styled from 'styled-components';
import Select from 'react-select';

export const ReactSelect = styled(Select)`
  height: 40px;
  width: 200px;
  outline: 0;
  border-radius: 5px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.grayDark};
  transition: 0.3s;
  border-color: #d9d9d9;

  &:hover {
    transition: 0.3s;
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    transition: 0.3s;
    border-color: ${({ theme }) => theme.primary};
  }
`;
