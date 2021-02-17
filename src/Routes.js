import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import FaleComElasForms from './pages/ContactUs/ContactUs';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={FaleComElasForms} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
