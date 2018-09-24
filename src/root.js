import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const NoMatch = () => <div>404</div>;

const Root = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default Root;
