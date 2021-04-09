import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import SignInPage from 'views/SignInPage/SignInPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import ForgotPasswordPage from 'views/ForgotPasswordPage/ForgotPasswordPage';
import ErrorPage from 'views/ErrorPage/ErrorPage';

 
const AuthViews = () => {
    return (  
        <Switch>
            <Route exact path={routes.signIn} component={SignInPage} />
            <Route exact path={routes.signUp} component={SignUpPage} />
            <Route exact path={routes.forgotPassword} component={ForgotPasswordPage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}
 
export default AuthViews;