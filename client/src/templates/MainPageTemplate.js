import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/organisms/Heading/Heading';
import Navbar from 'components/molecules/Navbar/Navbar';
import NavigationContext from 'context';

const MainPageTemplate = ({ children }) => {
  const [isVisible, changeVisibility] = useState(true);

  return (
    <NavigationContext.Provider value={[isVisible, changeVisibility]}>
      <Heading />
      {isVisible && <Navbar />}
      {children}
    </NavigationContext.Provider>
  );
};

MainPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default MainPageTemplate;
