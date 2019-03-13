import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Homepage from './pages/Homepage';

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  </Router>
);
