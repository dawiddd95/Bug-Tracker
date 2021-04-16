import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { Route, Redirect } from 'react-router-dom';

const ProtectAdminRoute = ({component: Component}) => {
    const type = sessionStorage.getItem('type');

    return <Route render={(props) => (
        type === 'Admin' ? <Component {...props} /> : <Redirect to={routes.dashboard} />
    )} />
}

ProtectAdminRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default ProtectAdminRoute;