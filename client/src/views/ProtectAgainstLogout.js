import * as React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { Route, Redirect } from 'react-router-dom';

const ProtectAgainstLogout = ({ component: Component }) => {
    const session = sessionStorage.getItem('session');

    return <Route render={(props) => (
        session ? <Redirect to={routes.dashboard} /> : <Component {...props} />
    )} />
}

ProtectAgainstLogout.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
 
export default ProtectAgainstLogout;