import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, AboutUs, PapoDelas, ElasIndicam, Contact } from "./pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre-elas" component={AboutUs} />
      <Route exact path="/papo-delas" component={PapoDelas} />
      <Route exact path="/elas-indicam" component={ElasIndicam} />
      <Route exact path="/contato" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
