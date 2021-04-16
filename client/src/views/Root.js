import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import ErrorPage from 'views/ErrorPage/ErrorPage';
import ProtectAgainstLogin from 'views/ProtectAgainstLogin';
import ProtectAgainstLogout from 'views/ProtectAgainstLogout';
import ProtectAdminRoute from 'views/ProtectAdminRoute';
import AuthViews from 'views/AuthViews';
import AppViews from 'views/AppViews';
import AdminViews from 'views/AdminViews';


const Root = () => (
    <Provider store={store}>
		<BrowserRouter>
			<MainTemplate>
				<Switch>
					<Route exact path='/' render={() => <Redirect to={routes.signIn} />} />
					<ProtectAgainstLogout path='/auth' component={AuthViews} />
					<ProtectAgainstLogin path="/user" component={AppViews} />
					<ProtectAdminRoute  path="/admin" component={AdminViews} />
					<Route component={ErrorPage} />
				</Switch>
			</MainTemplate>
		</BrowserRouter>
	</Provider>
  
);

export default Root;
