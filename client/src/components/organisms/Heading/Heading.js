import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';
import React from 'react';
import * as S from './StyledHeading';


const Heading = () => {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <AccountMenu />
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Heading;
