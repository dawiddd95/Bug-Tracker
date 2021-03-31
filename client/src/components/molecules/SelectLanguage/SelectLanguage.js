import React, { useState } from 'react';
import { ReactSelect } from 'components/atoms/Select/Select';
import * as S from './StyledSelectLanguage';

const options = [
    { value: 'eng', label: 'eng' },
    { value: 'pl', label: 'pl' },
];

const SelectLanguage = () => {
    const [selectedOption, setSelectedOption] = useState(null); 

    const change = selected => {
        setSelectedOption(selected);
    }

    return (  
        <S.Wrapper>
            <ReactSelect 
                value={selectedOption}
                onChange={() => change()}
                options={options}
            />
        </S.Wrapper>
    );
}
 
export default SelectLanguage;
