import SelectLanguage from 'components/molecules/SelectLanguage/SelectLanguage';
import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { routes } from 'routes';
// Skoro to jest plik index.js to nie musimy podawać jego nazwy jako store/index.js
// import store from 'store';
import MainTemplate from 'templates/MainTemplate';
// import HomePage from 'views/HomePage';
// import ContactPage from 'views/ContactPage';
// import LoginPage from 'views/LoginPage';
// import RegisterPage from 'views/RegisterPage';
// import ProductsPage from 'views/ProductsPage';
// import DetailsPage from 'views/DetailsPage';

const Root = () => (
  //   <Provider store={store}>
  // <BrowserRouter>
  //   {/* {children} dla MainTemplate są wszystkie componenty zwrócone z Route z component={} */}
    <MainTemplate>
      <SelectLanguage />

    </MainTemplate>
  // </BrowserRouter>
  //   </Provider>
  
);

export default Root;
