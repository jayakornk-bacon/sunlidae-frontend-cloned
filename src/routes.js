import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Test from './components/Test';
import UserProfile from './components/User/Profile';
import UserEdit from './components/User/Edit';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Test} />
      <Route exact path="/user" component={UserProfile} />
      <Route path="/user/edit" component={UserEdit} />
    </Switch>
  </Router>
);
