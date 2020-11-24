import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import AboutUs from './pages/AboutUs/AboutUs';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
