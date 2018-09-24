import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Login from './components/Login';
import Register from './components/Register';

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>
);

export default Root;
