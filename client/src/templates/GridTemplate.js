import React from 'react';
import PropTypes from 'prop-types';
import MainPageTemplate from 'templates/MainPageTemplate';
// import * as S from './StyledDashboardPage';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    min-height: 100vh;
    height: 10000px;
    padding: 65px 0 0 200px;

    background-color: red;

    border: 1px solid red;
`;

// Warto cały Grid wyodrębnić do GridTemplate
// children tutaj to te komponenty <Card cardType='notes' /> w Notes.js
const GridTemplate = ({ children }) => {
    return (
        <MainPageTemplate>
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </MainPageTemplate>
    )
}

GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default GridTemplate;
