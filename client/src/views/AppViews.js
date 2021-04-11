import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import DashboardPage from 'views/DashboardPage/DashboardPage';
import ProjectsPage from 'views/ProjectsPage/ProjectsPage';
import DetailsProjectPage from 'views/DetailsProjectPage/DetailsProjectPage';
import ErrorPage from 'views/ErrorPage/ErrorPage';
import NewProjectPage from 'views/NewProjectPage/NewProjectPage';
import EditProjectPage from 'views/EditProjectPage/EditProjectPage';
import NewTicketPage from './NewTicketPage/NewTicketPage';


const AppViews = () => {
    return (  
        <Switch>
            <Route exact path={routes.dashboard} component={DashboardPage} />
            <Route exact path={routes.projects} component={ProjectsPage} />
            <Route exact path={routes.project} component={DetailsProjectPage} />
            <Route exact path={routes.newProject} component={NewProjectPage} />
            <Route exact path={routes.editProject} component={EditProjectPage} />
            <Route exact path={routes.newTicket} component={NewTicketPage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}
 
export default AppViews;