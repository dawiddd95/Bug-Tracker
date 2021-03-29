import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { routes } from 'routes';
// Skoro to jest plik index.js to nie musimy podawać jego nazwy jako store/index.js
// import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';
import ContactPage from 'views/ContactPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import ProductsPage from 'views/ProductsPage';
import DetailsPage from 'views/DetailsPage';

const Root = () => (
  //   <Provider store={store}>
  <BrowserRouter>
    {/* {children} dla MainTemplate są wszystkie componenty zwrócone z Route z component={} */}
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.contact} component={ContactPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.regiser} component={RegisterPage} />
        <Route exact path={routes.products} component={ProductsPage} />
        <Route path={routes.product} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
  //   </Provider>
);

export default Root;
