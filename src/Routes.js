import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, AboutUs } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre-elas" component={ AboutUs } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
