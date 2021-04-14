import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import DashboardPage from 'views/DashboardPage/DashboardPage';
import ProjectsPage from 'views/ProjectsPage/ProjectsPage';
import DetailsProjectPage from 'views/DetailsProjectPage/DetailsProjectPage';
import ErrorPage from 'views/ErrorPage/ErrorPage';
import NewProjectPage from 'views/NewProjectPage/NewProjectPage';
import EditProjectPage from 'views/EditProjectPage/EditProjectPage';
import NewTicketPage from 'views/NewTicketPage/NewTicketPage';
import EditTicketPage from 'views/EditTicketPage/EditTicketPage';
import DetailsTicketPage from 'views/DetailsTicketPage/DetailsTicketPage';
import ProfilePage from 'views/ProfilePage/ProfilePage';


const AppViews = () => {
    return (  
        <Switch>
            <Route exact path={routes.dashboard} component={DashboardPage} />
            <Route exact path={routes.projects} component={ProjectsPage} />
            <Route exact path={routes.newProject} component={NewProjectPage} />
            <Route exact path={routes.project} component={DetailsProjectPage} />
            <Route exact path={routes.editProject} component={EditProjectPage} />
            <Route exact path={routes.newTicket} component={NewTicketPage} />
            <Route exact path={routes.editTicket} component={EditTicketPage} />
            <Route exact path={routes.ticket} component={DetailsTicketPage} />
            <Route exact path={routes.profile} component={ProfilePage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}
 
export default AppViews;