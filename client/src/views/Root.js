import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { routes } from 'routes';
// Skoro to jest plik index.js to nie musimy podawać jego nazwy jako store/index.js
// import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import SignInPage from 'views/SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import ForgotPasswordPage from './ForgotPasswordPage/ForgotPasswordPage';


const Root = () => (
    // <Provider store={store}>
		<BrowserRouter>
			<MainTemplate>
			<Switch>
				<Route exact path={routes.home} component={SignInPage} />
				<Route exact path={routes.signUp} component={SignUpPage} />
				<Route exact path={routes.forgotPassword} component={ForgotPasswordPage} />
			</Switch>
			</MainTemplate>
		</BrowserRouter>
	// </Provider>
  
);

export default Root;
