import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/organisms/Heading/Heading';
import Navbar from 'components/molecules/Navbar/Navbar';

const MainPageTemplate = ({ children }) => {

  return (
    <>
      <Heading />
      <Navbar />
      {children}
    </>
  );
};

MainPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default MainPageTemplate;
