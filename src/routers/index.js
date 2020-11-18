import React from "react";
import { Route, Switch } from "react-router-dom";
import Stock from "../pages/Stock";
import Sale from "../pages/Sale";
import User from "../pages/User";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import CreateProduct from "../pages/Products/CreateProduct";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/estoque" exact component={Stock} />
    <Route path="/estoque/adicionar" component={Stock} />
    <Route path="/vendas" component={Sale} />
    <Route path="/usuarios" component={User} />
    <Route path="/produtos" exact component={Products} />
    <Route path="/produtos/criar" component={CreateProduct} />
  </Switch>
);

export default Routes;
