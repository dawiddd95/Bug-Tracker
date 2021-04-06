import AccountMenu from 'components/molecules/AccountMenu/AccountMenu';
import NavigationContext from 'context';
import React, { useState, useContext } from 'react';
import { ReactSelect } from 'components/atoms/Select/Select';
import * as S from './StyledHeading';

const options = [
  { value: 'eng', label: 'eng' },
  { value: 'pl', label: 'pl' },
];

const Heading = () => {
  const [isVisible, changeVisibility] = useContext(NavigationContext);
  const [selectedOption, setSelectedOption] = useState({ value: 'eng', label: 'eng' });

  const change = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <button type="button" onClick={() => changeVisibility(!isVisible)}>
          change visibility!!!!!!!!!!!!!!!!!!!!
        </button>
        <S.LanguageSelectWrapper>
          <ReactSelect value={selectedOption} onChange={() => change()} options={options} />
        </S.LanguageSelectWrapper>
        <AccountMenu />
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Heading;
