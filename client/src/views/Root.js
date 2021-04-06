import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { routes } from 'routes';
// Skoro to jest plik index.js to nie musimy podawać jego nazwy jako store/index.js
// import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import ProtectAgainstLogin from 'views/ProtectAgainstLogin';
import ProtectAgainstLogout from 'views/ProtectAgainstLogout';
import SignInPage from 'views/SignInPage/SignInPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import ForgotPasswordPage from 'views/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from 'views/DashboardPage/DashboardPage';
import ErrorPage from './ErrorPage/ErrorPage';



const Root = () => (
    // <Provider store={store}>
		<BrowserRouter>
			<MainTemplate>
				<Switch>
          <Route exact path='/' render={() => <Redirect to={routes.signIn} />} />
          <Route exact path='/auth' render={() => <Redirect to={routes.signIn} />} />
          {/* form logowania przy sukcesie ma redirect to /dashboard */}
          <ProtectAgainstLogin path='/user' component={DashboardPage} />
          {/* Wylogowanie przy sukcesie ma robić redirect na /auth/sign-in */}
          <ProtectAgainstLogout exact path={routes.home} component={SignInPage} />
          <ProtectAgainstLogout exact path={routes.signIn} component={SignInPage} />
          <ProtectAgainstLogout exact path={routes.signUp} component={SignUpPage} />
          <ProtectAgainstLogout exact path={routes.forgotPassword} component={ForgotPasswordPage} />
					<Route exact path={routes.home} component={SignInPage} />
					<Route exact path={routes.signUp} component={SignUpPage} />
					<Route exact path={routes.forgotPassword} component={ForgotPasswordPage} />
					<Route component={ErrorPage} />
				</Switch>
			</MainTemplate>
		</BrowserRouter>
	// </Provider>
  
);

export default Root;
