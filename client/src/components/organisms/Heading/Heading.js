import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';
import React, { useState } from 'react';
import { ReactSelect } from 'components/atoms/Select/Select';
import * as S from './StyledHeading';

const options = [
  { value: 'eng', label: 'eng' },
  { value: 'pl', label: 'pl' },
];

const Heading = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 'eng', label: 'eng' });

  const change = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LanguageSelectWrapper>
          <ReactSelect value={selectedOption} onChange={() => change()} options={options} />
        </S.LanguageSelectWrapper>
        <AccountMenu />
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Heading;
