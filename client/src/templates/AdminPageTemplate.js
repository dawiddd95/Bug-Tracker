import React from 'react';
import PropTypes from 'prop-types';

const AdminPageTemplate = ({ children }) => {
  return <>{children}</>;
};

AdminPageTemplate.propTypes = {
  // Jeśli są błędy z tym, że jest Rquired to usunąć isRequired bo ja sam sobie to dopisałem
  // Jeszcze lepiej dla children możemy podać oba typy jeden z dwóch node lub element
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default AdminPageTemplate;
