import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: auto;
  margin-left: auto;
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  background: ${({ theme }) => theme.background.white};
  line-height: 1.5;
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
  display: flex;
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;
