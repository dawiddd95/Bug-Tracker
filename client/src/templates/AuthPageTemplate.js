import React from 'react';
import PropTypes from 'prop-types';

const AuthPageTemplate = ({ children }) => {
    return <>{children}</>;
};

AuthPageTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default AuthPageTemplate;
