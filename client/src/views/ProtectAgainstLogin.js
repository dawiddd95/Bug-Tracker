import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { Route, Redirect } from 'react-router-dom';

const ProtectAgainstLogin = ({component: Component}) => {
    const session = sessionStorage.getItem('session');

    return <Route render={(props) => (
        session ? <Component {...props} /> : <Redirect to={routes.signIn} />
    )} />
}

ProtectAgainstLogin.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default ProtectAgainstLogin;