import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import UsersPage from 'views/UsersPage/UsersPage';
import EditUserPage from 'views/EditUserPage/EditUserPage';


const AdminViews = () => {
    return (  
        <Switch>
            <Route exact path={routes.users} component={UsersPage} />
            <Route exact path={routes.editUser} component={EditUserPage} />
        </Switch>
    )
}
 
export default AdminViews;